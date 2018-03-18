const crypto = require('crypto');

class Token {
  static generate() {
    return new Promise((resolve, reject) => {
      const token = crypto.randomBytes(48).toString('hex');
      if (token) {
        resolve(token);
      } else {
        reject('Token could not be generated');
      }
    });
  }
}

module.exports = Token;
