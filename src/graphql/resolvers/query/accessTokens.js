const accessTokens = require('../user/accessTokens');
const User = require('../../../user');

module.exports = async (_, args) => {
  let user = await User.findByToken(args.token);
  user = user.rows[0];
  if (user) {
    return accessTokens(user, args);
  }
};
