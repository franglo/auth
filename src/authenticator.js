const moment = require('moment');
const db = require('../db');
const AccessToken = require('./accessToken');
const Password = require('./password');

class Authenticator {
  static authenticate(id, password) {
    let user = null;
    return (
      db.query({
        text: 'SELECT * FROM users WHERE id = $1 LIMIT 1',
        values: [id]
      })
      .then((res) => {
        user = res.rows[0];
        return Password.confirm(password, user.secret);
      }).then((valid) => {
        if (user && valid) {
          const expiresAt = moment().add(1, 'day');
          return AccessToken.create({ userId: user.id, expiresAt });
        } else {
          return Promise.reject('User could not be authenticated');
        }
      }).then((accessToken) => {
        return {
          user,
          accessToken: accessToken.rows[0]
        }
      })
    );
  }
}

module.exports = Authenticator;
