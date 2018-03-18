const db = require('../db');
const Token = require('./token');

class AccessToken {
  static create({ userId, expiresAt }) {
    return Token.generate().then(token => (
      db.query({
        text: 'INSERT INTO access_tokens(user_id, token, expires_at) VALUES($1, $2, $3) RETURNING *',
        values: [userId, token, expiresAt]
      })
    ));
  }
}

module.exports = AccessToken;
