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

  static findByUserId(id, { limit }) {
    let text = `
    SELECT * FROM access_tokens
    WHERE user_id = $1
    LIMIT $2
    `;
    return db.query({
      text,
      values: [id, limit]
    });
  }
}

module.exports = AccessToken;
