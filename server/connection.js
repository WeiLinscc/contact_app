const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'nscctest'
});

connection.connect();

connection.query(`CREATE TABLE IF NOT EXISTS contacts(
  id INT AUTO_INCREMENT PRIMARY KEY,
  image VARCHAR(255),
  fist_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255),
  email VARCHAR(255),
  phone_number VARCHAR(20) NOT NULL
)  ENGINE=INNODB;`, err => {
  if (err) {
    console.error('err', err);
  }
});

module.exports = connection;
