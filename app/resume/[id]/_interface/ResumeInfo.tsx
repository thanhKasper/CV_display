export interface PhoneNum {
    phone_number: string;
}

export interface Degree {
    name: string;
}

export interface ResumeInfo {
  age: number;
  degree: Degree[];
  description: string;
  email: string;
  experience: string;
  gender: string;
  name: string;
  phone_number: PhoneNum[];
  reg_date: string;
  resume_id: number;
  skills: string;
  user_id: number;
}
