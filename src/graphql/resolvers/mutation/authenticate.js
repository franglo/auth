const Authenticator = require('../../../authenticator');

module.exports = async (_, { id, password }) => {
  const session = await Authenticator.authenticate(id, password);
  return session;
};
