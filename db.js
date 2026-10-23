const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'campus_lost_found',
  waitForConnections: true,
  connectionLimit: 10,
  dateStrings: true 
});
