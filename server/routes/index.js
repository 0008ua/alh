const express = require('express');
const router = express.Router();
const path = require('path');

const { reservationRoutes } = require('./reservation.routes');
const { userRoutes } = require('./user.routes');
const { storeRoutes } = require('./store.routes');

router.use('/', express.static(path.join(__dirname, '/../../public'), { redirect: false }));
router.use('*', (req, res, next) => res.sendFile(path.resolve('public/index.html')));

module.exports = {
  router,
  reservationRoutes,
  userRoutes,
  storeRoutes,
};
