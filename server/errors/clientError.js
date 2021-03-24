const CustomError = require('./customError');
/**
 * Client errors 400..
 */
module.exports = class ClientError extends CustomError {
  constructor(err) {
    super(err);
    this.status = err && err.status ? err.status : 400;
  }
};

//    messages
// uniqueConflict (login or email already exists) - 422 Unprocessable Entity
// noSuchUser (wrong email, _id, login) => clientError - 401 Unauthorized
// wrongCredentials (wrong code, password) => clientError - 403 Forbidden
// maxTries (reached max of tries) => clientError - 403 Forbidden
// recaptchaErr () => clientError - 403 Forbidden
// bc (Bestcrypt errors)
// notAuthorized (don't have permission) => clientError - 401 Unauthorized

// Angular
// (err: HttpErrorResponse) => {
//   console.log('err', err.error.message);
// });

