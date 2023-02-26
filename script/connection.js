// Import and require mysql2
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'yeebs2023',
      database: 'staff_tracker_db'
    },
    console.log(`Connected to the staff_tracker database 2.`)
  );


  module.exports = db;