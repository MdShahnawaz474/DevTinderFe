import axios, { AxiosError } from "axios";
import type { LoginCredentials, SignupCrediantls } from "../types/Types";
import { deleteCookie, getCookie } from "./CookieService";
import { jwtDecode } from "jwt-decode";


interface JwtPayload {
  exp: number; // Expiration time in seconds since epoch
  [key: string]: any;
}
// export const BASE_URL =  "/api"  //import.meta.env.VITE_BASEURL;
export const BASE_URL =  import.meta.env.VITE_BASEURL;
export const loginUser = async ({ emailId, password }: LoginCredentials) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/login`,
      { emailId, password },
      {
        withCredentials: true,
      }
    );
    
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    
    const errorMessage = 
      axiosError.response?.data instanceof Object 
        ? (axiosError.response.data as any).message || "Login failed. Please try again."
        : axiosError.response?.data as string || "Login failed. Please try again.";
    
    return {
      success: false,
      message: errorMessage,
    };
  }
};

  // export const signup = async ({firstName,lastName,age,about,email,gender,password,photoUrl,skills}:SignupCrediantls)=>{
  //   try {
  //     const res = await axios.post(`${BASE_URL}/signup`,{
  //       firstName,
  //       lastName,
  //       email,
  //       age,
  //       gender,
  //       password,
  //       photoUrl,
  //       // skills,
  //       about
  //     })
  
  //     console.log(res);
      
  //   return res.data;
  //   } catch (error) {
  //     const axiosError = error as AxiosError;
  //     const errorMessage = 
  //       axiosError.response?.data instanceof Object 
  //         ? (axiosError.response.data as any).message || "Login failed. Please try again."
  //         : axiosError.response?.data as string || "Login failed. Please try again.";
      
  //         console.log(errorMessage);
                  
  //     return {
  //       success: false,
  //       message: errorMessage,
  //     };
  //   }
  // }


  export const signup = async (data: SignupCrediantls) => {
  try {
    const payload: Record<string, any> = {};

    for (const [key, value] of Object.entries(data)) {
      if (value !== undefined && value !== null) {
        payload[key] = value;
      }
    }

    console.log("Sanitized Payload:", payload);

    const res = await axios.post(`${BASE_URL}/signup`, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res);
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    const errorMessage =
      axiosError.response?.data instanceof Object
        ? (axiosError.response.data as any).message || "Signup failed. Please try again."
        : (axiosError.response?.data as string) || "Signup failed. Please try again.";

    console.log(errorMessage);

    return {
      success: false,
      message: errorMessage,
    };
  }
};



 export const handleLogOuts = async()=>{
     try {
      const res = await axios.post(`${BASE_URL}/logout`,{},{withCredentials:true})
      return res
     } catch (error:any) {
      console.log(error.message);
     }
  }

  export const getFeedData = async ()=>{
    try {
      const res = await axios.get(`${BASE_URL}/feed`,{
        withCredentials:true
      })
      return res.data;

    } catch (error) {
        const axiosError = error as AxiosError;
        console.log(axiosError);
        
          return {
      success: false,
      message: axiosError,
    };
    }
  }

  const validateToken  = ()=>{
    try {
      const token = getCookie("token");
      if(token){
        const decoded:JwtPayload = jwtDecode(token);
        const currentTime = Date.now()/1000;
        if(decoded.exp >currentTime){
          return true;

        }else{
          deleteCookie("token");

        }
        return false

      }else{
        return false;
      }
    } catch (error:any) {
       console.log(error.message);
    }
  }

 export const isAuthenticateUser = (): boolean => {
  try {
    if (validateToken()) {
      return true;
    }
    deleteCookie("token");
    return false;
  } catch (error) {
    console.error("Token validation error:", error);
    deleteCookie("token"); // Safe fallback
    return false; // ✅ Always return a boolean
  }
};
// export const;
