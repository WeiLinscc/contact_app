const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '8889',
  user: 'root',
  password: 'root',
  database: 'nscctest'
});

connection.connect();

module.exports = connection;
