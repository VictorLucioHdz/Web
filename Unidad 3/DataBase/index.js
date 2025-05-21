import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin1234',
  database: 'd21100233',
  port: 3306,
});

// A simple SELECT query
try {
  const [results, fields] = await connection.query(
    'SELECT * FROM  d21100233.carros'
  );

  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
} catch (err) {
  console.log(err);
}

