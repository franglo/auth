const { Pool } = require('pg')
const config = require('./config.json');
const pool = new Pool({
  ...config,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});


(async () => {
  const client = await pool.connect();
  const response = await client.query({
    text: 'INSERT INTO users(secret) VALUES($1)',
    values: ['secret']
  });
  console.log(response.rows);
  client.release();
})();

