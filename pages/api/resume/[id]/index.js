

import resumedata from '../../database/resumes.json';
import phonedata from '../../database/phones.json';
import degreedata from '../../database/degrees.json';
import userdata from '../../database/users.json';
import languagedata from '../../database/language.json'

export default async function handler(req, res) {

  const { id } = req.query;

  res.setHeader("Access-Control-Allow-Origin", "*"); 
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); 
  
  const resume = resumedata.find((item) => item.resume_id == id);
  const user = userdata.find((item) => item.user_id == id);
  let resumeInfo = {
    resume_id: resume.resume_id,
    name: resume.name,
    age: resume.age,
    user_id: resume.user_id,
    gender: resume.gender,
    description: resume.description,
    phone_number: [],
    email: user.email,
    degree: [],
    language: [],
    reg_date: resume.reg_date,
  };
  let phoneNumbers = phonedata.filter(
    (phone) => phone.resume_id === resume.resume_id
  );

  for (let phone of phoneNumbers) {
    resumeInfo.phone_number.push(phone.phone_number);
  }

  let degree = degreedata.filter(
    (degreeID) => degreeID.resume_id === resume.resume_id
  );

  for (let degreeID of degree) {
    resumeInfo.degree.push(degreeID.description);
  }

  let language = languagedata.filter(
    (languageID) => languageID.resume_id === resume.resume_id
  );

  for (let languageID of language) {
    resumeInfo.language.push(languageID.description);
  }

  res.json(resumeInfo);
}
