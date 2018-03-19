const AccessToken = require('../../../accessToken');

module.exports = async (user, args) => {
  let accessTokens = await AccessToken.findByUserId(user.id, args);
  accessTokens = accessTokens.rows;
  return accessTokens;
};
