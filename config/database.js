const pgp         = require('pg-promise')();
const connection  = process.env.DATABASE_URL || {
  host: 'localhost',
  port: 5432,
  database: 'specific_assembly'
};

module.exports    = pgp(connection);