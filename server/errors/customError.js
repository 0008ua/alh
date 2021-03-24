module.exports = class CustomError extends Error {
  constructor(err) {
    super();
    this.message = err && err.message ? this.constructor.name + '. ' + err.message : 'Bad request';
    this.code = err && err.code ? err.code : 0;
    this.name = this.constructor.name;
  }
};
