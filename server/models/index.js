// const ReservationModel = require('./reservation.model');

const { mongoose } = require('../config/mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  // _id: {
  //   type: mongoose.ObjectId,
  //   required: true,
  // },
  room_id: {
    type: mongoose.ObjectId,
    required: true,
  },
  dates: {
    from: {
      type: Date,
      required: true,
    },
    to: {
      type: Date,
      required: true,
    },
  },
  bookingStep: {
    type: String,
    required: true,
    enum: ['preorder', 'waiting-for-payment', 'reserved', 'canceled'],
  },
  price: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
  payments: {
    type: [{
      date: {
        type: Date,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      paymentMethod: {
        type: String,
        required: true,
        enum: ['card', 'cash'],
      },
    }],
    default: [],
  },
  guestName: {
    type: String,
  },
  guestPhone: {
    type: String,
  },
  guestEmail: {
    type: String,
  },
// }, {
//   toObject: {
//     virtuals: true,
//   },
//   toJSON: {
//     virtuals: true,
//   },
});

// BookingSchema.virtual('totalPaid').get(function() {
//   let amount = 0;
//   this.payments.forEach((item) => {
//     amount += item.amount;
//   });
//   return amount;
// });

// BookingSchema.virtual('balance').get(function() {
//   return this.price - this.totalPaid;
// });

const RoomSchema = new Schema({
  // _id: {
  //   type: mongoose.ObjectId,
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // bookings: [{ type: Schema.Types.ObjectId, ref: 'bookings' }],
});

const CompanySchema = new Schema({
  // _id: {
  //   type: mongoose.ObjectId,
  //   required: true,
  // },
  companyName: {
    type: String,
    required: true,
  },
  rooms: {
    type: [RoomSchema],
  },
  users: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  // users: {
  //   type: [mongoose.ObjectId],
  // },
});

const UserSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    default: null,
  },
  role: {
    type: String,
    required: true,
    enum: ['manager', 'admin'],
    default: 'manager',
  },
  sessions: {
    type: [String],
  },
  createdAt: {
    type: Number,
    default: () => Date.now(),
  },
  passwordTries: {
    type: Number,
    default: 0,
  },
  passwordLockTries: {
    type: Number,
    default: 5,
  },
  passwordLockUntil: {
    type: Number,
    default: 0,
  },
  activated: {
    type: Boolean,
    default: false,
  },
  activation: {
    code: {
      type: Number,
      default: 0,
    },
    expires: {
      type: Number,
      default: () => Date.now() + 300000, // 5min
    },
  },
  blocked: {
    type: Boolean,
    default: false,
  },
  v: {
    type: Number,
    default: 0,
  },
});


CompanyModel = mongoose.model('companies', CompanySchema);
BookingModel = mongoose.model('bookings', BookingSchema);
UserModel = mongoose.model('users', UserSchema);

module.exports = {
  CompanyModel,
  BookingModel,
  UserModel,
  RoomSchema,
};
