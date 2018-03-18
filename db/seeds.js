const db = require('.');
const User = require('../src/user');

(async () => {
  await User.create('password1');
  await User.create('password2');
  await User.create('password3');
  await User.create('password4');
  await User.create('password5');
  process.exit();
})();
