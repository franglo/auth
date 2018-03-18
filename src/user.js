const db = require('../db');
const Password = require('./password');

class User {
  static create(password) {
    return Password.encrypt(password).then(secret => (
      db.query({
        text: 'INSERT INTO users(secret) VALUES($1) RETURNING *',
        values: [secret]
      })
    ));
  }

  static findByToken(token) {
    const text = `
      SELECT users.* FROM users
      LEFT JOIN access_tokens ON access_tokens.user_id = users.id
      WHERE access_tokens.token = $1
      AND access_tokens.expires_at > NOW()
      AND access_tokens.valid = 't'
      LIMIT 1
    `;
    return db.query({
      text,
      values: [token]
    });
  }
}

module.exports = User;
