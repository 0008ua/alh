const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const { userController } = require('../controllers');
const { attachCompany_idMiddleware, attachCompanyLiteMiddleware,
  authentication, authorization, denyBlockedUsers } = require('../helpers');

const midleware = (req, res, next) => {
  console.log('req.body midleware', req.body);
  next();
};

router.delete('/remove-company',
  passport.authenticate('jwt', { session: false }),
  authorization('admin'),
  attachCompanyLiteMiddleware,
  userController.removeCompany);

router.get('/get-company-by-user',
  passport.authenticate('jwt', { session: false }),
  attachCompanyLiteMiddleware,
  userController.getCompanyByUser);

router.get('/get-company-users',
  passport.authenticate('jwt', { session: false }),
  authorization('admin'),
  userController.getCompanyUsers);

router.post('/create-company-user',
  passport.authenticate('jwt', { session: false }),
  authorization('admin'),
  attachCompany_idMiddleware,
  userController.createCompanyUser);

router.put('/updateUser/:_id',
  passport.authenticate('jwt', { session: false }),
  denyBlockedUsers,
  userController.updateUser,
);

router.get('/is-company-name-unique', userController.isCompanyNameUnique);
router.get('/is-login-unique', userController.isLoginUnique);
router.get('/is-email-unique', userController.isEmailUnique);

router.post('/create-company',
  userController.createCompany,
  passport.authenticate('localWithoutPassword', { session: false }),
  userController.login,
);

router.post('/login',
  passport.authenticate('local', { session: false }),
  userController.login,
);
router.put('/logout',
  passport.authenticate('jwt', { session: false }),
  userController.logout);

router.post('/auth/generate-tokens',
  passport.authenticate('jwt-refresh', { session: false }),
  userController.login,
);

router.put('/activate-user/:_id',
  passport.authenticate('jwt', { session: false }),
  userController.activateUser,
);

router.get('/send-activation-code/:_id',
  passport.authenticate('jwt', { session: false }),
  userController.sendActivationCode,
);

/* Test routes -- Refresh token */
/* router.get('/protected', userController.protected);
router.get('/refresh-token', userController.refreshToken); */

module.exports.userRoutes = router;
