const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'expressdb',
  password: 'mujib7861',
  port: 5432,
})

module.exports = pool