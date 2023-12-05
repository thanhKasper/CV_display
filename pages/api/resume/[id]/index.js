
import mysql2 from 'mysql2/promise'

export default async function handler(req, res) {


  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  
  if (req.method == 'GET') {
    const { id } = req.query

    const connection = await mysql2.createConnection({
      host: "sql12.freesqldatabase.com",
      user: "sql12667183",
      password: "sNLs2RNbEk",
      database: "sql12667183",
      port: 3306
    })

    const result = await connection.execute(`
    SELECT * FROM resumes WHERE resume_id = ?;
    `, [id])

    const degreeResult = await connection.execute(`
    SELECT name FROM degrees WHERE resume_id = ?;
    `, [id])

    const phoneResult = await connection.execute(`
    SELECT phone_number FROM phones WHERE resume_id = ?;
    `, [id])

    const resume = result[0][0]
    console.log(resume)

    let resumeInfo = {
      resume_id: resume.resume_id,
      name: resume.name,
      age: resume.age,
      user_id: resume.user_id,
      gender: resume.gender,
      description: resume.description,
      phone_number: phoneResult[0],
      email: resume.email,
      degree: degreeResult[0],
      skills: resume.skills,
      experience: resume.experience,
      reg_date: resume.reg_date,
    };

    connection.destroy()

    return res.status(200).json({
      resume: resumeInfo
    })
  }
}