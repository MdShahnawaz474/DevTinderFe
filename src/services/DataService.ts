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

export const editProfile = async ({
  firstName,
  lastName,
  gender,
  age,
  about,
  photoUrl,
  skills,
}: FeedUser) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/profile/edit`,
      {
        firstName,
        lastName,
        gender,
        age,
        about,
        photoUrl,
        skills,
      },
      { withCredentials: true }
    );
    return {
      success: true,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error: any) {
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
};

export const getConnections = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/user/connections`, {
      withCredentials: true,
    });
    console.log(res);
    return {
      success: true,
      data: res.data,
    };
  } catch (error: any) {
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
};

export const getRequests = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/user/requests/recieved`, {
      withCredentials: true,
    });
    // console.log(res);
    return {
      success: true,
      data: res.data,
    };
  } catch (error: any) {
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
};

export const reviewRequests = async (status: string, _id: string) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/request/review/${status}/${_id}`,
      {},
      { withCredentials: true }
    );

    console.log(res);

    console.log(res.data);

    return res.data;
  } catch (error: any) {
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
};

export const SendAcceptReject = async (status: string, _id: string) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/request/send/${status}/${_id}`,
      {},
      { withCredentials: true }
    );
    return res.data;
  } catch (error: any) {
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
};
