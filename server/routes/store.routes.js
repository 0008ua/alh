const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const { storeController } = require('../controllers');
const { attachCompany_idMiddleware, attachCompanyMiddleware, authentication, authorization } = require('../helpers');

router.post('/:entityName',
  passport.authenticate('jwt', { session: false }),
  authorization('admin'),
  attachCompany_idMiddleware,
  storeController.add);

router.delete('/:entityName/:_id',
  passport.authenticate('jwt', { session: false }),
  authorization('admin'),
  attachCompany_idMiddleware,
  storeController.remove);

router.get('/:entitiesName',
  passport.authenticate('jwt', { session: false }),
  attachCompanyMiddleware,
  storeController.getAll);

router.get('/:entityName/:_id', storeController.getById);
router.get('/:entityName', storeController.getWithQuery);

router.put('/:entityName/:_id',
  passport.authenticate('jwt', { session: false }),
  attachCompany_idMiddleware,
  (req, res, next) => {
    const entityName = req.params.entityName;
    if (entityName === 'room') {
      next();
    } else {
      return authorization('admin')(req, res, next);
    }
  },
  // authorization('admin'),
  storeController.update,
  );

module.exports.storeRoutes = router;
