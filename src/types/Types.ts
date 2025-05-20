
export interface LoginCredentials {
  emailId: string;
  password: string;
}

export interface FormData {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  emailId: string;
  password?: string;
  photoUrl: string;
  about: string;
  skills: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface FeedUser {
  
  _id?: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  about: string;
  age?:Number;
  gender?:string;
  skills?:string[];
}

export interface ProfileUser {
  _id?: string;
  firstName: string;
  lastName: string;
  emailId: string;
  password?: string;
  photoUrl: string;
  about: string;
  skills: string[];
  
}

export interface Connection  {
  _id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  about: string;
  skills: string[];
  age?:string,
  gender?:string
};