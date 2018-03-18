const User = require('../../../user');

module.exports = async (_, { password }) => {
  const user = await User.create(password);
  return user.rows[0];
};
