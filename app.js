const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const passport = require('passport');
const cors = require('cors');

const { router } = require('./server/routes');

const { errorHandler, ClientError } = require('./server/errors');
const { reservationRoutes, userRoutes, storeRoutes } = require('./server/routes');

const app = express();

// app.use(cors(
//   {
//     // allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization'],
//     // credentials: true,
//     // methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
//     origin: ['http://localhost:8100'],
//     preflightContinue: false,
//   },
// ));

app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// check cookie, add req.csrfToken(),
// const csrf = require('csurf');
// const setCSRFCookie = (req, res, next) => {
//   const cookieCsrfOptions = {
//     httpOnly: false,
//     maxAge: 10800000,
//     sameSite: 'Strict',
//     path: '/',
//   };
//   res.cookie(
//     'XSRF-TOKEN',
//     req.csrfToken(),
//     cookieCsrfOptions,
//   );
//   next();
// };
// app.use(csrf({ cookie: true }));
// app.use(setCSRFCookie);


app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
require('./server/config/passport');

// const { ExtractJwt } = require('passport-jwt');
// const config = require('./server/config');
// const { createJWT } = require('./server/helpers');

// //   console.log('req.url', req.url);

//   //   console.log('req.headers', req.headers);
//   //   const jwtOptions = {};
//   //   jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
//   //   jwtOptions.secretOrKey = config.get('JWTSecret');
//   //   res.append('Content-language', 'ua');

//   //   if (req.headers.authorization) {

//   //   }

//   const frontendCookieName = 'FRONTEND_AUTH_SID';
//   const JWTSecret = config.get('JWT_SECRET');
//   console.log('Access-Control-Allow-Origin', req.headers);

//   // res.set('Access-Control-Allow-Origin', 'http://192.168.137.1:8100');
//   // res.set('Access-Control-Allow-Credentials', 'true');

//   console.log('req.cookies', req.cookies['FRONTEND_AUTH_SID']);
//   let token;
//   if (req.isAuthenticated()) {
//     const user = {
//       _id: req.user._doc._id,
//       displayName: req.user._doc.displayName,
//       photoUrl: req.user._doc.photoUrl,
//       provider: req.user._doc.provider,
//       role: req.user._doc.role,
//     };
//     // console.log('user', user.provider);
//     token = createJWT('', user, null, JWTSecret);
//   } else {
//     // console.log('not user', null);
//     token = createJWT('', null, null, JWTSecret);
//   }
//   res.cookie(
//     frontendCookieName,
//     token,
//     {
//       secure: true,
//       httpOnly: true,
//       // maxAge: null,
//       // sameSite: 'Strict',
//     },
//   );
//   next();
// });
// const {setRefreshTokenCookie} = require('./server/helpers');
// app.use(setRefreshTokenCookie);

app.use('/api/reservation', reservationRoutes);
app.use('/api/user', userRoutes);
app.use('/api/store', storeRoutes);

app.use('/api', (req, res, next) =>
  next(new ClientError({
    message: 'Wrong api: ' + req.url,
    status: '404',
  })),
);

/**
 * all not-apis, 404 will be handled at frontend
 */
app.use('/', router);

app.use('*', function(req, res) {
  res.redirect('/');
});

// error handler
app.use(errorHandler);

module.exports = app;
