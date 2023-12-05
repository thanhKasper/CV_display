const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'sql12.freesqldatabase.com',
  database: 'sql12667183',
  user: 'sql12667183',
  password: 'sNLs2RNbEk',
  port: 3306,
});


export default async function getUser(req, res) {
  const connection = await pool.getConnection();
  const [user] = await connection.query('SELECT * FROM users');
  connection.release();

  return res.status(200).json(user);
}

