const User = require('../../../user');

module.exports = async (_, { token }) => {
  const user = await User.findByToken(token);
  return user.rows[0];
};
