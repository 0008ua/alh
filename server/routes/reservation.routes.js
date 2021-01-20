const express = require('express');
const router = express.Router();
const { reservationController } = require('../controllers');
const helpers = require('../helpers');
const passport = require('../config/passport');

// router.get('/get-rooms-by-date-range', passport.authenticate('jwt', { session: false }), reservationController.getRoomsByDateRange);
router.get('/get-room-by-id/:id',
  passport.authenticate('jwt', { session: false }),
  reservationController.getRoomById);

router.get('/get-booking-by-id/:id',
  passport.authenticate('jwt', { session: false }),
  reservationController.getBookingById);

router.get('/get-bookings',
  passport.authenticate('jwt', { session: false }),
  // helpers.attachCompanyMiddleware,
  reservationController.getBookings);

router.get('/get-available-date-to',
  passport.authenticate('jwt', { session: false }),
  reservationController.getAvailableDateTo);

router.put('/upsert-booking',
  passport.authenticate('jwt', { session: false }),
  helpers.checkBookingBelongsToCompanyMiddleware,
  reservationController.upsertBooking);

router.delete('/delete-booking/:_id',
  passport.authenticate('jwt', { session: false }),
  reservationController.remove);

// router.get('/create-reservations', reservationController.createCompanies);

// router.post('/set-date', reservationController.setDate);

module.exports.reservationRoutes = router;
