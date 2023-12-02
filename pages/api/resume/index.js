// pages/api/resumes.js
import data from '../database/resumes.json';

// Một API route trả về một mảng JSON
export default function handler(req, res) {
  // Gửi một phản hồi JSON với một mảng JSON
  res.status(200).json(data);
}
