const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "dealive",
  password: "password",
  connectionLimit: 10, // Количество одновременных соединений в пуле
});

const promisePool = pool.promise();

module.exports = promisePool;
// const conn = mysql.createConnection(
//     {
//         host: "localhost",
//         user: "root",
//         database: "dealive",
//         password: "password",
//     }
// )

// conn.connect()
//     .then(() => {
//         console.log('Connected to the database');
//     })
//     .catch((err) => {
//         console.error('Failed to connect to the database:', err.message);
//     });

// module.exports = conn;
