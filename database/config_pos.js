require('dotenv').config();
const mysql = require('mysql2');

module.exports = () => {
  return mysql.createConnection({
    user: process.env.USER_POS,
    password: process.env.PASSWORD_POS,
    host: process.env.SERVER_POS,
    database: process.env.DATABASE_POS
  });
}