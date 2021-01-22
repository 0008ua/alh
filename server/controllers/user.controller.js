const { mailjet } = require('../config/mail');

const { Types } = require('mongoose');
const config = require('../config');
const { ClientError, DbError, ServerError } = require('../errors');
const { isCompanyNameUniqueHelper, createUserHelper, isLoginUniqueHelper,
  isEmailUniqueHelper, checkDbResOkOne,
  normalizeUserObject, createJWT, updateUserVersion } = require('../helpers');
const { CompanyModel, UserModel } = require('../models');

// self update User
const updateUser = (req, res, next) => {
  if (req.params._id !== req.user._id.toString()) {
    return next(new ClientError());
  }
  const _id = req.user._id;
  const update = req.body;
  update.activated = false;

  UserModel.findOneAndUpdate(
    { _id },
    { $set: update },
    {
      upsert: false, // Create a document if one isn't found. if {upsert: false} and added new document, db returns null
      useFindAndModify: false, // use findOneAndUpdate MongoDB driver's instead of findAndModify()
      new: true, // Return NEW document after updates are applied, by default old
      rawResult: false, // return mongoDB object instead of doc (old version of doc included)
    },
  )
    .then((updatedUser) => updateUserVersion(updatedUser))
    .then((updatedUser) => {
      const user = normalizeUserObject(updatedUser);
      const token = createJWT('JWT ', user, config.get('expiration').accessTokenExpiresMs / 1000, config.get('JWT_SECRET'));
      return res.status(200).json(token);
    })
    .catch((err) => next(err));
};

const activateUser = (req, res, next) => {
  if (req.params._id !== req.user._id.toString()) {
    return next(new ClientError());
  }
  const _id = req.user._id;
  const codeFromUser = req.body.code;
  const codeFromDb = req.user.activation.code;
  const codeExpires = req.user.activation.expires;
  let update;

  if (codeFromUser === codeFromDb && codeExpires > Date.now()) {
    update = {
      activated: true,
      activation: {
        code: null,
        expires: Date.now() },
    };
  } else {
    update = {
      activated: false,
      activation: {
        code: null,
        expires: Date.now(),
      },
    };
  }
  UserModel.findOneAndUpdate(
    { _id },
    { $set: update },
    {
      upsert: false, // Create a document if one isn't found. if {upsert: false} and added new document, db returns null
      useFindAndModify: false, // use findOneAndUpdate MongoDB driver's instead of findAndModify()
      new: true, // Return NEW document after updates are applied, by default old
      rawResult: false, // return mongoDB object instead of doc (old version of doc included)
    },
  )
    .then((updatedUser) => updateUserVersion(updatedUser))
    .then((updatedUser) => {
      if (updatedUser.activated) {
        const user = normalizeUserObject(updatedUser);
        const token = createJWT('JWT ', user, config.get('expiration').accessTokenExpiresMs / 1000, config.get('JWT_SECRET'));
        return res.status(200).json(token);
      } else {
        return next(new ClientError({ message: 'Wrong code', status: 403 }));
      }
    })
    .catch((err) => next(err));
};


const sendActivationCode = (req, res, next) => {
  const user = req.user;
  const code = Math.floor(Math.random() * (100000));
  UserModel.findOneAndUpdate(
    { _id: user._id },
    { $set: { activation: {code} } },
    {
      upsert: false, // Create a document if one isn't found. if {upsert: false} and added new document, db returns null
      useFindAndModify: false, // use findOneAndUpdate MongoDB driver's instead of findAndModify()
      new: true, // Return NEW document after updates are applied, by default old
      rawResult: false, // return mongoDB object instead of doc (old version of doc included)
    },
  )
    .then((updatedUser) =>
      mailjet
        .post('send', { 'version': 'v3.1' })
        .request({
          'Messages': [
            {
              'From': {
                'Email': 'alittlehotel@gmail.com',
                'Name': 'No Reply. Activation code',
              },
              'To': [
                {
                  'Email': updatedUser.email,
                  'Name': updatedUser.login,
                },
              ],
              'Subject': 'Activation code from "A Little Hotel"',
              'TextPart': `Please enter code ${updatedUser.activation.code} in your profile. Codes lifetime is 5 minutes`,
              'HTMLPart': `<h3>Please enter code ${updatedUser.activation.code} in your profile</h3>
          <p>Codes lifetime is 5 minutes</p>
          `,
              'CustomID': 'null',
            // <a href=\'https://www.mailjet.com/\'>Mailjet</a>!</h3><br />May the delivery force be with you!',
            },
          ],
        }) )
    .then((result) => {
      return res.status(200).json();
    })
    .catch((err) => {
      return next(err);
    });
};

const getCompanyByUser = (req, res, next) => res.status(200).json(req.company);

const createCompanyUser = (req, res, next) => {
  const user = { ...req.body };
  user.role = 'manager';
  const company_id = req.company._id;
  return createUserHelper(user)
    .then((savedUser) => {
      return CompanyModel.updateOne(
        { _id: company_id },
        { $push: { users: savedUser._id } },
        { upsert: false },
      );
    })
    .then((result) => checkDbResOkOne(result))
    .then((_) => {
      return res.status(200).json(user);
    })
    .catch((err) => next(err));
};

const getCompanyUsers = (req, res, next) => {
  const users_id = JSON.parse(req.query.users_id);
  UserModel.find({ _id: { $in: users_id } }, { password: 0 })
    .then((companyUsers) => res.status(200).json(companyUsers))
    .catch((err) => next(err));
};

/*
  user login
 */
const login = (req, res, next) => {
  if (req.isAuthenticated()) {
    const user = normalizeUserObject(req.user);
    const accessToken = createJWT('JWT ', user, config.get('expiration').accessTokenExpiresMs / 1000, config.get('JWT_SECRET'));
    const refreshToken = createJWT('', { _id: user._id }, config.get('expiration').refreshTokenExpiresMs / 1000, config.get('JWT_SECRET'));
    // res.locals.accessToken = accessToken;
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: config.get('expiration').accessTokenExpiresMs,
      sameSite: 'Strict',
      // domain: config.get('DOMAIN'),
      path: '/api/user/auth',
    };
    res.cookie(
      'RT',
      refreshToken,
      cookieOptions,
    );
    return res.status(200).json(accessToken);
  }
  return next(new ClientError({ message: 'Помилка авторизації', status: 401 }));
};

const logout = (req, res, next) => {
  const { deviceInfo } = req.body;
  const _id = req.user._id;

  UserModel.findOneAndUpdate(
    { _id },
    { $pull: {sessions: deviceInfo.uuid} },
    { upsert: false, useFindAndModify: false, new: true, rawResult: false },
  )
    .then((result) => {
      req.logout();
      const cookieOptions = {
        httpOnly: true,
        secure: true,

        sameSite: 'Strict',
        // domain: config.get('DOMAIN'),
        path: '/api/user/auth',
      };
      res.clearCookie('RT', cookieOptions);
      return res.status(200).json(null);
    })
    .catch((err) => {
      console.log('err', err);
      req.logout();
      res.clearCookie('RT', { path: '/api/user/auth', domain: config.get('DOMAIN') });
      UserModel.updateOne(
        { _id },
        { $set: { sessions: [] } },
        { upsert: false },
      ).then((_) => next(new ServerError({ message: 'Logout error' })))
        .catch((_) => next(new ServerError({message: 'Logout error'})));
    });
};

const isCompanyNameUnique = (req, res, next) => {
  const companyName = req.query.companyName;
  isCompanyNameUniqueHelper(companyName)
    .then((_) => res.status(200).json(null))
    .catch((err) => next(err));
};

const isLoginUnique = (req, res, next) => {
  const login = req.query.login;
  isLoginUniqueHelper(login)
    .then((_) => res.status(200).json(null))
    .catch((err) => next(err));
};

const isEmailUnique = (req, res, next) => {
  const email = req.query.email;
  isEmailUniqueHelper(email)
    .then((_) => res.status(200).json(null))
    .catch((err) => next(err));
};

// /*
//    user create
//    invokes 'next()' to login created user
//   */
// const createUser = (req, res, next) => {
//   const user = { ...req.body };
//   user.role = 'manager';
//   createUserHelper(user)
//     // next to login created user
//     .then((savedUser) => {
//       req.body = user;
//       return next();
//     })
//     .catch((err) => next(err));
// };

const createCompany = (req, res, next) => {
  const companySignup = req.body;
  const user = { ...companySignup.user };
  user.role = 'admin';
  isCompanyNameUniqueHelper(companySignup.companyName)
    .then((_) => createUserHelper(user))
    .then((savedUser) => {
      const company = {
        companyName: companySignup.companyName,
        rooms: [],
        users: [new Types.ObjectId(savedUser._id)],
      };
      const companyModel = new CompanyModel(company);
      return companyModel.save();
    })
    .then((savedCompany) => {
      req.body = user;
      return next();
    })
    .catch((err) => next(err));
};

/* Test -- Refresh token */
/* const protected = (req, res, next) => {
  console.log('token', req.headers['api-token']);
  if (req.headers['api-token'] === 'wrongToken' || req.headers['api-token'] === 'XwrongToken') {
    return next(new ClientError({ message: 'Access token error', status: 401 }));
  } else {
    return res.status(200).json('protected data');
  }
};

const refreshToken = (req, res, next) => {
  // return next(new ClientError({ message: 'Access token get error', status: 401 }));
  return res.status(200).json('XpwrongToken');
}; */


module.exports.userController = {
  getCompanyByUser,
  getCompanyUsers,
  login,
  logout,
  isCompanyNameUnique,
  isLoginUnique,
  isEmailUnique,
  updateUser,
  sendActivationCode,
  activateUser,
  createCompanyUser,
  createCompany,

  /* test */
  // protected, refreshToken,
};
