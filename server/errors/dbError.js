const CustomError = require('./customError');
/**
 * Client errors 400..
 */
module.exports = class DbError extends CustomError {
  constructor(err) {
    super(err);
    this.status = err && err.status ? err.status : 400;
  }
};

// Angular
// (err: HttpErrorResponse) => {
//   console.log('err', err.error.message);
// });
