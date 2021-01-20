// const { ReservationModel } = require('../models');
const { Types } = require('mongoose');

const { DbError, ClientError } = require('../errors');

// const { ReservationModel } = require('../models/reservation.model');
const { CompanyModel, BookingModel } = require('../models');
// const { checkDbResNotNull, checkDbResOkOne } = require('../helpers');

const helpers = require('../helpers');

const getRoomById = (req, res, next) => {
  const _id = req.params.id + '';
  const user_id = req.user._id + '';
  return CompanyModel.aggregate(
    [
      {
        '$match': {
          'users': new Types.ObjectId(user_id),
        },
      }, {
        '$unwind': '$rooms',
      }, {
        '$replaceRoot': {
          'newRoot': '$rooms',
        },
      }, {
        '$match': {
          '_id': new Types.ObjectId(_id),
        },
      },
    ])


    .then((result) => res.status(200).json(result.length ? result[0] : null))
    .catch((err) => next(new DbError({ message: 'Помилка завантаження номера' })));
};

const getBookingById = (req, res, next) => {
  const _id = req.params.id + '';
  const user_id = req.user._id + '';
  // BookingModel.find({_id })
  return CompanyModel.aggregate(
    [
      {
        '$match': {
          'users': new Types.ObjectId(user_id),
        },
      }, {
        '$lookup': {
          'from': 'bookings',
          'localField': 'rooms._id',
          'foreignField': 'room_id',
          'as': 'bookings',
        },
      }, {
        '$unwind': {
          'path': '$bookings',
        },
      }, {
        '$match': {
          'bookings._id': new Types.ObjectId(_id),
        },
      }, {
        '$replaceRoot': {
          'newRoot': '$bookings',
        },
      },
    ],
  )
    .then((result) => {
      // create model to update/create virtual fields - new BookingModel(result[0])
      return res.status(200).json(result ? result[0] : null);
    })
    .catch((err) => next(new DbError(err)));
};

const getAvailableDateTo = (req, res, next) => {
  const room_id = req.query.roomid + '';
  const dateFrom = req.query.datefrom;
  const user_id = req.user._id + '';
  return CompanyModel.aggregate([
    {
      '$match': {
        'users': new Types.ObjectId(user_id),
      },
    }, {
      '$unwind': '$rooms',
    }, {
      '$match': {
        'rooms._id': new Types.ObjectId(room_id),
      },
    }, {
      '$lookup': {
        'from': 'bookings',
        'let': {},
        'pipeline': [
          {
            '$match': {
              '$expr': {
                '$gt': [
                  '$dates.from', new Date(dateFrom),
                ],
              },
            },
          },
          {
            '$match': {
              '$expr': {
                '$ne': [
                  '$bookingStep', 'cancelled',
                ],
              },
            },
          },
        ],
        'as': 'bookings',
      },
    }, {
      '$unwind': '$bookings',
    }, {
      '$group': {
        '_id': null,
        'to': {
          '$min': '$bookings.dates.from',
        },
      },
    }, {
      '$project': {
        'to': 1,
        '_id': 0,
      },
    },
  ]).then((result) => res.status(200).json(result.length ? result[0].to : null))
    .catch((err) => next(new DbError({ message: 'Помилка завантаження вільної дати to' })));
};

const getBookings = (req, res, next) => {
  // dates - {date: {lower, upper}}
  // room_id - {room_id}
  // bookingStep - {bookingStep: {expr, val}}
  // sort
  // skip
  // limit
  const bookingQuery = JSON.parse(req.query.bookingQuery);
  const user_id = req.user._id + '';

  const pipeline = new Pipeline();

  // room filter
  if (bookingQuery.room_id) {
    // only selected room
    pipeline
      .addExprEq('$room_id', new Types.ObjectId(bookingQuery.room_id));
  } else {
    // all company rooms
    pipeline
      .addExprIn('$room_id', '$$rooms._id');
  }

  // booking step filter
  if (bookingQuery.bookingStep) {
    pipeline
      .addExpr({ [bookingQuery.bookingStep.expr]: ['$bookingStep', bookingQuery.bookingStep.val] });
  }

  // date range filter
  pipeline
    .addExpr({
      '$or': [
        {
          '$and': [
            { '$gte': ['$dates.from', new Date(bookingQuery.dateRange.lower)] },
            { '$lte': ['$dates.from', new Date(bookingQuery.dateRange.upper)] },
          ],
        },
        {
          '$and': [
            { '$gte': ['$dates.to', new Date(bookingQuery.dateRange.lower)] },
            { '$lte': ['$dates.to', new Date(bookingQuery.dateRange.upper)] },
          ],
        },
      ],
    });

  return CompanyModel.aggregate([
    {
      '$match': {
        'users': new Types.ObjectId(user_id),
      },
    },
    {
      '$lookup': {
        'from': 'bookings',
        'let': {
          'rooms': '$rooms',
        },
        'pipeline': [
          ...pipeline.value,
        ],
        'as': 'bookings',
      },
    },
    {
      '$unwind': {
        'path': '$bookings',
      },
    },
    {
      '$replaceRoot': {
        'newRoot': '$bookings',
      },
    },
    {
      '$sort': { [bookingQuery.sort? bookingQuery.sort.field : 'dates.from']: bookingQuery.sort? bookingQuery.sort.order: 1 },
    },
    {
      '$skip': bookingQuery.skip | 0,
    },
    {
      '$limit': bookingQuery.limit ? bookingQuery.limit: Number.MAX_SAFE_INTEGER,
    },
  ])

    .then((result) => res.status(200).json(result))
    .catch((err) => next(new DbError({ message: 'Помилка завантаження резервувань' })));
};

class Pipeline {
  constructor() {
    this.pipeline = [];
  }

  _addExpr(expr) {
    this.pipeline.push(
      {
        '$match': {
          '$expr': expr,
        },
      },
    );
  }

  addExpr(expr) {
    this._addExpr(expr);
    return this;
  }

  addExprIn(val, arr) {
    this._addExpr({
      '$in': [val, arr],
    });
    return this;
  }

  addExprEq(val1, val2) {
    this._addExpr({
      '$eq': [val1, val2],
    });
    return this;
  }

  addExprNe(val) {
    this._addExpr({
      '$ne': val,
    });
    return this;
  }

  addExprLte(val1, val2) {
    this._addExpr({
      '$lte': [val1, val2],
    });
    return this;
  }

  addExprGte(val1, val2) {
    this._addExpr({
      '$gte': [val1, val2],
    });
    return this;
  }

  get value() {
    return this.pipeline;
  }
}

// const getRoomsByDateRange = (req, res, next) => {
//   const lower = req.query.lower;
//   const upper = req.query.upper;
//   const user_id = req.user._id + '';

//   const pipeline = new Pipeline();
//   pipeline
//     .addExprEq('$room_id', '$$rooms_id');

//   if (req.query.query) {
//     const query = JSON.parse(req.query.query);
//     pipeline
//       .addExpr({ [query.filter.expr]: ['$' + query.field, query.filter.val] });
//   }

//   pipeline
//     .addExpr({
//       '$or': [
//         {
//           '$and': [
//             { '$gte': ['$dates.from', new Date(lower)] },
//             { '$lte': ['$dates.from', new Date(upper)] },
//           ],
//         },
//         {
//           '$and': [
//             { '$gte': ['$dates.to', new Date(lower)] },
//             { '$lte': ['$dates.to', new Date(upper)] },
//           ],
//         },
//       ],
//     });

//   return CompanyModel.aggregate([
//     {
//       '$match': {
//         'users': new Types.ObjectId(user_id),
//       },
//     }, {
//       '$unwind': {
//         'path': '$rooms',
//       },
//     },
//     {
//       '$lookup': {
//         'from': 'bookings',
//         'let': {
//           'rooms_id': '$rooms._id',
//         },
//         'pipeline': [
//           ...pipeline.value,
//         ],
//         'as': 'bookings',
//       },
//     },
//     {
//       '$project': {
//         'users': 0,
//       },
//     },
//   ])

//     .then((result) => res.status(200).json(result))
//     .catch((err) => next(new DbError({ message: 'Помилка завантаження резервувань' })));
// };

const upsertBooking = (req, res, next) => {
  const booking = helpers.normalizeBookingObject(req.body);

  BookingModel.updateOne(
    { _id: booking._id, bookingStep: {'$ne': 'cancelled'} },
    booking,
    { upsert: true },
  )
    .then((result) => helpers.checkDbResOkOne(result))
    .then((result) => res.status(200).json(result))
    .catch((err) => next(new DbError(err)));
};

const remove = (req, res, next) => {
  const _id = req.params._id;
  BookingModel.deleteOne({ _id })
    .then((result) => helpers.checkDbResDeleteCount(result))
    .then((_) => {
      return res.status(200).json();
    })
    .catch((err) => next(err));
};

const createCompaniesTS = (req, res, next) => {
  CompanyModel.collection.drop();
  BookingModel.collection.drop();
  CompanyModel.insertMany([
    {
      companyName: 'Company Name',
      users: [new Types.ObjectId('5fa50dcd93c70e12ac8a7d67')],
      rooms: [{
        name: 'Bedroom for 4 persons',
        price: 500,
      },
      {
        name: 'Bedroom for 2 persons',
        price: 400,
      }],
    }])
    .then((result) => {
      console.log('result', result);
      return BookingModel.insertMany([
        {
          room_id: result[0].rooms[0]._id,
          dates: {
            from: 1599868800000, // 12.09
            to: 1600387200000, // 18.09
          },

          bookingStep: 'reserved',
          price: 500,
          discount: 0,
          payments: [{
            date: 1600128000000,
            amount: 300,
            paymentMethod: 'card',
          },
          {
            date: 1600128000000,
            amount: 200,
            paymentMethod: 'card',
          }],
          guestName: 'Jack',
          guestPhone: '+380503333333',
          guestEmail: 'any@email.com',
        },
        {
          room_id: result[0].rooms[0]._id,

          dates: {
            from: 1600387200000, // 18.09
            to: 1600992000000, // 25.09
          },
          bookingStep: 'preorder',
          price: 500,
          discount: 200,
          payments: [{
            date: 1600128000000,
            amount: 300,
            paymentMethod: 'card',
          },
          {
            date: 1600128000000,
            amount: 200,
            paymentMethod: 'card',
          }],
          guestName: 'John',
          guestPhone: '+380503333333',
          guestEmail: 'any@email.com',
        },
        {
          room_id: result[0].rooms[1]._id,

          dates: {
            from: 1599868800000, // 12.09 1599868800000
            to: 1600041600000, // 14.09
          },
          bookingStep: 'preorder',
          price: 500,
          discount: 200,
          payments: [{
            date: 1600128000000,
            amount: 300,
            paymentMethod: 'card',
          },
          {
            date: 1600128000000,
            amount: 200,
            paymentMethod: 'card',
          }],
          guestName: 'Rob',
          guestPhone: '+380503333333',
          guestEmail: 'any@email.com',
        },
        {
          room_id: result[0].rooms[1]._id,

          dates: {
            from: 1600387200000, // 18.09
            to: 1600992000000, // 25.09
          },
          bookingStep: 'preorder',
          price: 500,
          discount: 200,
          payments: [{
            date: 1600128000000,
            amount: 300,
            paymentMethod: 'card',
          },
          {
            date: 1600128000000,
            amount: 200,
            paymentMethod: 'card',
          }],
          guestName: 'Bob',
          guestPhone: '+380503333333',
          guestEmail: 'any@email.com',
        },
      ]);
    })
    .then((response) => res.status(200).json(response));
};
const createCompanies = (req, res, next) => {
  CompanyModel.collection.drop();
  BookingModel.collection.drop();
  CompanyModel.insertMany([
    {
      companyName: 'Company Name',
      users: [new Types.ObjectId('5fa50dcd93c70e12ac8a7d67')],
      rooms: [{
        name: 'Bedroom for 4 persons',
        price: 500,
      },
      {
        name: 'Bedroom for 2 persons',
        price: 400,
      }],
    }])
    .then((result) => {
      console.log('result', result);
      return BookingModel.insertMany([
        {
          room_id: result[0].rooms[0]._id,
          dates: {
            from: new Date('2020-12-01'), // 12.09
            to: new Date('2020-12-05'), // 18.09
          },

          bookingStep: 'reserved',
          price: 500,
          discount: 0,
          payments: [{
            date: new Date('2020-12-01'),
            amount: 300,
            paymentMethod: 'card',
          },
          {
            date: new Date('2020-12-02'),
            amount: 200,
            paymentMethod: 'card',
          }],
          guestName: 'Jack',
          guestPhone: '+380503333333',
          guestEmail: 'any@email.com',
        },
        {
          room_id: result[0].rooms[0]._id,

          dates: {
            from: new Date('2020-12-11'), // 18.09
            to: new Date('2020-12-12'), // 25.09
          },
          bookingStep: 'preorder',
          price: 500,
          discount: 200,
          payments: [{
            date: new Date('2020-12-01'),
            amount: 300,
            paymentMethod: 'card',
          },
          {
            date: new Date('2020-12-01'),
            amount: 200,
            paymentMethod: 'card',
          }],
          guestName: 'John',
          guestPhone: '+380503333333',
          guestEmail: 'any@email.com',
        },
        {
          room_id: result[0].rooms[1]._id,

          dates: {
            from: new Date('2020-12-01'), // 12.09 1599868800000
            to: new Date('2020-12-02'), // 14.09
          },
          bookingStep: 'preorder',
          price: 500,
          discount: 200,
          payments: [{
            date: new Date('2020-12-01'),
            amount: 300,
            paymentMethod: 'card',
          },
          {
            date: new Date('2020-12-01'),
            amount: 200,
            paymentMethod: 'card',
          }],
          guestName: 'Rob',
          guestPhone: '+380503333333',
          guestEmail: 'any@email.com',
        },
        {
          room_id: result[0].rooms[1]._id,

          dates: {
            from: new Date('2020-12-20'), // 18.09
            to: new Date('2020-12-21'), // 25.09
          },
          bookingStep: 'preorder',
          price: 500,
          discount: 200,
          payments: [{
            date: new Date('2020-12-01'),
            amount: 300,
            paymentMethod: 'card',
          },
          {
            date: new Date('2020-12-01'),
            amount: 200,
            paymentMethod: 'card',
          }],
          guestName: 'Bob',
          guestPhone: '+380503333333',
          guestEmail: 'any@email.com',
        },
      ]);
    })
    .then((response) => res.status(200).json(response));
};


module.exports.reservationController = {
  getRoomById,
  getBookingById,
  createCompanies,
  getAvailableDateTo,
  upsertBooking,
  getBookings,
  remove,
};
