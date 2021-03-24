const CustomError = require('./customError');
/**
 * Client errors 400..
 */
module.exports = class ServerError extends CustomError {
  constructor(err) {
    super(err);
    this.status = err && err.status ? err.status : 500;
  }
};

//    messages
// bc (Bestcrypt errors) - 500 Internal Server Error

// Angular
// (err: HttpErrorResponse) => {
//   console.log('err', err.error.message);
// });
