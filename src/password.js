const bcrypt = require('bcrypt');
const saltRounds = 10;

class Password {
  static encrypt(password) {
    return bcrypt.hash(password, saltRounds);
  }

  static confirm(password, secret) {
    return bcrypt.compare(password, secret);
  }
}

module.exports = Password;
