import axios, { AxiosError } from "axios";
import type { LoginCredentials } from "../types/Types";

export const BASE_URL =  "/api"  //import.meta.env.VITE_BASEURL;
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
// export const;
