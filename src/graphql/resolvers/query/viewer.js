const User = require('../../../user');

module.exports = async (_, { token }) => {
  let user = await User.findByToken(token);
  user = user.rows[0];
  if (user) {
    return user;
  }
};
