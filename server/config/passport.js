const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { isLoginExists, isPasswordMatched, isPasswordLocked, updatePasswordLockOptions } = require('../helpers');
const { UserModel } = require('../models');
const config = require('./');


passport.use('local', new LocalStrategy({
  usernameField: 'login',
  passwordField: 'password',
  passReqToCallback: true,
},
(req, login, password, done) => {
  const userCandidate = {
    login,
    password,
  };
  let userFromDb;
  isLoginExists(userCandidate.login)
    .then((user) => {
      userFromDb = user;
      return isPasswordLocked(userFromDb);
    })
  // if password doesn't match then throw error with code 'wrongCredentials' here
    .then(() => isPasswordMatched(userCandidate.password, userFromDb._doc.password))
    .then(() => UserModel.updateOne(
      { _id: userFromDb._id, sessions: { $nin: [req.body.deviceInfo.uuid] } },
      { $push: { sessions: { $each: [req.body.deviceInfo.uuid], $slice: -5 } } },
      { upsert: false },
    ))
    .then(() => done(null, userFromDb))
    .catch((err) => {
      if (err.code === 'wrongCredentials') {
        updatePasswordLockOptions(userFromDb)
          .then(() => done(err, false))
          .catch((err) => done(err, false));
      } else {
        done(err, false);
      }
    });
},
));

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = config.get('JWT_SECRET');

passport.use('jwt', new JwtStrategy(jwtOptions, (jwtPayload, done) => {
  // на основі _id (витягнутого з токена) робить пошук
  // в базі, чи є такий юзер, і ф-я done повертає відповідь
  UserModel.findOne({ _id: jwtPayload._id })
    .then((user) => {
      // check version of user token equal version in db
      // if not (credentials changed, ..) need to reauth using refresh token or login/pass
      if (user && user.v === jwtPayload.v) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch((err) => {
      done(err, false);
    });
},
));

const refreshTokenFromCookieOptions = {};
refreshTokenFromCookieOptions.secretOrKey = config.get('JWT_SECRET');
refreshTokenFromCookieOptions.passReqToCallback = true;
refreshTokenFromCookieOptions.jwtFromRequest = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['RT'];
    console.log('refresh token passport', token);
  }
  return token;
};

passport.use('jwt-refresh',
  new JwtStrategy(
    refreshTokenFromCookieOptions,
    (req, jwtPayload, done) => {
      console.log('jwtPayload passport', jwtPayload);
      UserModel.findOne({ _id: jwtPayload._id })
        .then((user) => {
          const uuid = user.sessions.filter((el) => el === req.body.deviceInfo.uuid);
          if (user && uuid.length > 0) {
            done(null, user);
          } else {
            UserModel.updateOne(
              { _id: jwtPayload._id },
              { $set: { sessions: [] } },
              { upsert: false },
            )
              .then(() => done(null, false))
              .catch((err) => done(err, false));
          }
        })
        .catch((err) => done(err, false));
    },
  ));


// login user after creation or change credentials
// without password
passport.use('localWithoutPassword', new LocalStrategy(
  {
    usernameField: 'login',
    passwordField: 'password',

  },
  (login, password, done) => {
    isLoginExists(login)
      .then((userFromDb) => {
        done(null, userFromDb);
      })
      .catch((err) => done(err, false));
  },
));

module.exports = passport;
