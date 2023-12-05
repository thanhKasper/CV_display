
import data from '../database/resumes.json';
import mysql2 from 'mysql2/promise'
import NextCors from 'nextjs-cors';


export default async function handler(req, res) {
  // req.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); 
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); 
  // res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
  // res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); 

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method == "GET") {

    const connection = await mysql2.createConnection({
      host: "sql12.freesqldatabase.com",
      user: "sql12667183",
      password: "sNLs2RNbEk",
      database: "sql12667183",
      port: 3306
    })

    const result = await connection.execute(`
    SELECT * FROM resumes;
    `)

    connection.destroy()

    res.status(200).json(result[0]);
  }
}
