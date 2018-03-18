const db = require('../db');
const Password = require('./password');

class User {
  static create(password) {
    return Password.encrypt(password).then(secret => (
      db.query({
        text: 'INSERT INTO users(secret) VALUES($1)',
        values: [secret]
      })
    ));
  }
}

module.exports = User;
