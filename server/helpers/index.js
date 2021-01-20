const bcrypt = require('bcryptjs');
const { Types } = require('mongoose');
const jwt = require('jsonwebtoken');

const config = require('../config/');
const { UserModel, CompanyModel } = require('../models');
const { ClientError, DbError, ServerError } = require('../errors');

const authentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return next(new ClientError({ message: 'notAuthenticated', status: 401 }));
  }
};

const authorization = (restrictedRole) => {
  return (req, res, next) => {
    const usersRole = req.user._doc.role;
    const permissions = config.get('permissions');
    if (usersRole in permissions) {
      if (permissions[usersRole].indexOf(restrictedRole) >= 0) {
        return next();
      } else {
        return next(new ClientError({ message: 'notAuthorized', status: 401 }));
      }
    } else {
      return next(new ClientError({ message: 'notAuthorized', status: 401 }));
    }
  };
};

const attachCompany_idMiddleware = (req, res, next) => {
  // if (req.isAuthenticated()) {
  CompanyModel.findOne({ users: req.user._id }, {_id: 1})
    .then((company_id) => {
      if (company_id) {
        req.company = {
          _id: company_id,
        };
        return next();
      } else {
        return next(new ClientError({ message: 'Помилка авторизації', status: 401 }));
      }
    })
    .catch((err) => next(err));
  // }
};

const attachCompanyMiddleware = (req, res, next) => {
  // let projection;
  // if (req.user.role === 'admin') {
  //   projection = {};
  // } else {
  //   projection = { users: 0 };
  // }
  const projection = {};
  CompanyModel.findOne({ users: req.user._id}, projection)
    .then((company) => {
      if (company) {
        req.company = company;
        return next();
      } else {
        return next(new ClientError({ message: 'Помилка авторизації', status: 401 }));
      }
    })
    .catch((err) => next(err));
};

const attachCompanyLiteMiddleware = (req, res, next) => {
  let projection;
  if (req.user.role === 'admin') {
    projection = {};
  } else {
    projection = { users: 0 };
  }
  CompanyModel.findOne({ users: req.user._id }, projection)
    .then((company) => {
      if (company) {
        req.company = company;
        return next();
      } else {
        return next(new ClientError({ message: 'Помилка авторизації', status: 401 }));
      }
    })
    .catch((err) => next(err));
};

/*
 need:
 1. passport authenticate => req.user
 2. booking with room_id field in req.body
 */
const checkBookingBelongsToCompanyMiddleware = (req, res, next) => {
  const booking = req.body;
  const room_id = booking.room_id;
  CompanyModel.findOne({ 'users': req.user._id, 'rooms._id': room_id })
    .then((company) => {
      if (company) {
        return next();
      } else {
        return next(new ClientError({ message: 'Помилка авторизації', status: 401 }));
      }
    })
    .catch((err) => next(err));
};

// const setRefreshTokenCookie = (req, res, next) => {
//   const cookieOptions = {
//     httpOnly: true,
//     maxAge: 60 * 60 * 24 * 14 * 1000, // 2 weeks
//     sameSite: 'Strict',
//     domain: config.get('DOMAIN'),
//     path: '/api/user/auth',
//   };
//   res.cookie(
//     'REFRESH-TOKEN',
//     'req.user.logina',
//     cookieOptions,
//   );
//   next();
// };

// const createAccessToken(user) {
//   const normalizedUser = normalizeUserObject(user);
//   const token = jwt.sign(normalizedUser, config.get('JWT_SECRET'), {
//     expiresIn: 300, // 5 min
//   });
// }

const createJWT = (prefix, sub, expire, secret) => {
  const date = Math.floor(Date.now() / 1000); // in seconds
  return (
    prefix +
    jwt.sign(
      {
        ...sub,
        iat: date, // seconds
        exp: date + expire, // seconds
      },
      secret,
    )
  );
};

const updateUserVersion = (user) => {
  return new Promise((resolve, reject) => {
    UserModel.findOneAndUpdate(
      { _id: user._id },
      { $inc: { v: 1 } },
      {
        upsert: false, // Create a document if one isn't found. if {upsert: false} and added new document, db returns null
        useFindAndModify: false, // use findOneAndUpdate MongoDB driver's instead of findAndModify()
        new: true, // Return NEW document after updates are applied, by default old
        rawResult: false, // return mongoDB object instead of doc (old version of doc included)
      },
    )
      .then((updatedUser) => resolve(updatedUser))
      .catch((err) => reject(err));
  });
};

const normalizeUserObject = (user) => {
  if (!user) {
    throw new ServerError();
  }
  if (Array.isArray(user)) {
    return user.map((user) => ({
      _id: user._id,
      login: user.login,
      email: user.email,
      role: user.role,
      blocked: user.blocked,
      activated: user.activated,
      v: user.v,
    }));
  } else {
    return {
      _id: user._id,
      login: user.login,
      email: user.email,
      role: user.role,
      blocked: user.blocked,
      activated: user.activated,
      v: user.v,
    };
  };
};

const isCompanyNameUniqueHelper = (companyName) => {
  return new Promise((resolve, reject) => {
    CompanyModel.findOne({ companyName })
      .then((result) => {
        if (result) {
          reject(new ClientError({ message: 'Така компанія вже існує', status: 422, code: 'uniqueConflict' }));
        }
        resolve();
      })
      .catch((err) => reject(err));
  });
};

const createUserHelper = (user) => {
  return new Promise((resolve, reject) => {
    isEmailUniqueHelper(user.email)
      .then(() => isLoginUniqueHelper(user.login))
      .then(() => bcrypt.hash(user.password, 10))
      .then((hash) => {
        user.password = hash;
        user.createdAt = Date.now();
        const userModel = new UserModel(user);
        return userModel.save();
      })
      .then((savedUser) => resolve(savedUser))
      .catch((err) => reject(err));
  });
};

const isEmailUniqueHelper = (email) => {
  return new Promise((resolve, reject) => {
    UserModel.findOne({ email })
      .then((result) => {
        if (result) {
          reject(new ClientError({ message: 'Цей email вже використовується', status: 422, code: 'uniqueConflict' }));
        }
        resolve();
      })
      .catch((err) => reject(err));
  });
};

const isLoginUniqueHelper = (login) => {
  return new Promise((resolve, reject) => {
    UserModel.findOne({ login })
      .then((user) => {
        if (user) {
          reject(new ClientError({ message: 'Цей логін вже використовується', status: 422, code: 'uniqueConflict' }));
        }
        resolve();
      })
      .catch((err) => reject(err));
  });
};

const isLoginExists = (login) => {
  return new Promise((resolve, reject) => {
    UserModel.findOne({ login })
      .then((user) => {
        if (user) {
          resolve(user);
        }
        reject(new ClientError({ message: 'Користувача не знайдено', status: 401 }));
      })
      .catch((err) => reject(err));
  });
};

const isPasswordLocked = (userFromDb) => {
  return new Promise((resolve, reject) => {
    if (userFromDb.isPasswordLocked) {
      const estimatedTime = userFromDb.passwordLockUntil - Date.now();
      reject(new ClientError({
        message: `Вхід заблоковано, спробуйте через
        ${Math.round(estimatedTime / 1000 / 60)} хвилин.`,
        status: 403,
      }));
    } else {
      resolve();
    }
  });
};

const isPasswordMatched = (passwordCandidate, passwordFromDb) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(passwordCandidate, passwordFromDb)
      .then((passwordMatched) => {
        if (passwordMatched) {
          resolve();
        } else {
          reject(new ClientError({ message: 'Невірний пароль', status: 401, code: 'wrongCredentials' }));
        }
      })
      .catch((err) => reject(err));
  });
};


/**
 * update user (password lock options) after wrong password input
 *
 * @param {UserModel} user
 * @return {Promise<object>}
 */
const updatePasswordLockOptions = (user) => {
  return new Promise((resolve, reject) => {
    const dateNow = Date.now(); // in seconds
    let query;

    if ((dateNow - user.passwordLockUntil) > 600000) {
      query = {
        $set: {
          passwordTries: 1,
          passwordLockUntil: dateNow,
        },
      };
    } else if (user.passwordTries >= user.passwordLockTries) {
      query = {
        $set: {
          passwordTries: 1,
          passwordLockUntil: dateNow + 600000,
        },
      };
    } else {
      query = {
        $inc: { passwordTries: 1 },
        $set: { passwordLockUntil: dateNow },
      };
    }
    UserModel.updateOne({ _id: user._id }, query)
      .then((result) => checkDbResOkOne(result))
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

// check result of updeteOne, ok === 1 and match docs q-ty === 1
const checkDbResOkOne = (result) => {
  return new Promise((resolve, reject) => {
    if (result.ok !== 1 || result.n !== 1) {
      reject(new DbError({ message: 'result is not ok' }));
    }
    resolve(result);
  });
};

const checkDbResNModified = (result) => {
  return new Promise((resolve, reject) => {
    if (result.nModified < 1) {
      reject(new DbError({ message: 'nModified less than 1' }));
    }
    resolve(result);
  });
};

const checkDbResDeleteCount = (result) => {
  return new Promise((resolve, reject) => {
    if (result.deletedCount < 1) {
      reject(new DbError({ message: 'deleteCount less than 1' }));
    }
    resolve(result);
  });
};

// if {upsert: false} and added new document, db returns null
const checkDbResNotNull = (result) => {
  return new Promise((resolve, reject) => {
    if (result === null) {
      reject(new DbError({ message: 'result is null' }));
    }
    resolve(result);
  });
};

// convertBookingDatesIsoToShort and add ObjectIds (_id, payments._id) if they are absent
const normalizeBookingObject = (booking) => {
  return {
    ...booking,
    _id: booking._id ? booking._id : new Types.ObjectId(),
    dates: {
      from: new Date(booking.dates.from),
      to: new Date(booking.dates.to),
    },
    payments: booking.payments.map((payment) => {
      return {
        ...payment,
        date: new Date(payment.date),
        _id: payment._id ? payment._id : new Types.ObjectId(),
      };
    }),
  };
};

module.exports = {
  authentication,
  authorization,
  attachCompany_idMiddleware,
  attachCompanyMiddleware,
  attachCompanyLiteMiddleware,
  checkBookingBelongsToCompanyMiddleware,
  normalizeUserObject,
  createUserHelper,
  isCompanyNameUniqueHelper,
  isEmailUniqueHelper,
  isLoginUniqueHelper,
  isLoginExists,
  isPasswordLocked,
  isPasswordMatched,
  updatePasswordLockOptions,
  checkDbResOkOne,
  checkDbResDeleteCount,
  checkDbResNModified,
  checkDbResNotNull,
  createJWT,
  updateUserVersion,
  // setRefreshTokenCookie,

  normalizeBookingObject,
};
