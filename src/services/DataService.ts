import axios, { AxiosError } from "axios";
import { BASE_URL } from "./AuthService";
import type { FeedUser } from "../types/Types";

export const getProfileData = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/profile/view`, {
      withCredentials: true,
    });

    return res;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.message);
  }
};

export const editProfile = async ({firstName,
  lastName,
  gender,
  age,
  about,
  photoUrl,
  skills,}:FeedUser) => {
  try {
    const response = await axios.patch(`${BASE_URL}/profile/edit`, {
      firstName,
      lastName,
      gender,
      age,
      about,
      photoUrl,
      skills,
    },{withCredentials:true});
     return {
      success: true,
      message: response.data.message,
      data: response.data.data,
    };

  } catch (error:any) {
       const message =
      error.response?.data?.message ||
      error.response?.data ||
      error.message ||
      "Unknown error";

    return {
      success: false,
      message,
      error: message,
    };
  }
  }

