const { Pool } = require('pg')
const config = require('./config.json');
const pool = new Pool({
  ...config,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

module.exports = {
  query: ({ text, values }) => pool.query({
    text,
    values
  })
};
