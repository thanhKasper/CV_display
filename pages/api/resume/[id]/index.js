// Import axios to fetch data from api

import resumedata from '../../database/resumes.json';
import phonedata from '../../database/phones.json';
import degreedata from '../../database/degrees.json';
import userdata from '../../database/users.json';
// Export a default function to handle api route
export default async function handler(req, res) {
  // Get the id from the query
  const { id } = req.query;


  
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
    reg_date: resume.reg_date,
    email: user.email,
    degree: [],
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

  


  res.json(resumeInfo);
}
