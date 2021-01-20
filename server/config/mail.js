const config = require('./');
const mailjet = require('node-mailjet').connect(config.get('MAIL_API_KEY'), config.get('MAIL_SECRET_KEY'));

module.exports.mailjet = mailjet;
