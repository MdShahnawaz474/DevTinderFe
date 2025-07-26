import axios from "axios";
import { BASE_URL } from "./AuthService";

export const createPaymentOrder = async (planData: any) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/payment/create`,
      {
        amount: planData.amount,
        currency: "INR",
        planName: planData.planName,
        planType: planData.planType, // monthly or yearly
      },
      {
        withCredentials: true,
      }
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


// import axios from "axios";

// // Input data structure sent to the backend
// export interface PlanData {
//   amount: number;
//   planName: string;
//   planType: "monthly" | "yearly";
// }

// // Structure of the Razorpay order returned by backend
// export interface RazorpayOrder {
//   id: string;
//   amount: number;
//   currency: string;
//   receipt: string;
//   status: string;
//   created_at: number;
// }

// // Success response from backend
// interface SuccessResponse {
//   success: true;
//   message: string;
//   order: RazorpayOrder;
//   paymentId: string;
// }

// // Error response from backend
// interface ErrorResponse {
//   success: false;
//   message: string;
//   error: string;
// }

// // Union return type
// export type PaymentOrderResponse = SuccessResponse | ErrorResponse;

// const BASE_URL = "https://your-api-url.com"; // Replace with actual backend URL

// export const createPaymentOrder = async (
//   planData: PlanData
// ): Promise<PaymentOrderResponse> => {
//   if (!planData.amount || !planData.planName || !planData.planType) {
//     return {
//       success: false,
//       message: "Invalid plan data provided.",
//       error: "Missing required plan fields",
//     };
//   }

//   try {
//     const res = await axios.post<SuccessResponse>(
//       `${BASE_URL}/payment/create`,
//       {
//         amount: planData.amount,
//         planName: planData.planName,
//         planType: planData.planType,
//       },
//       {
//         withCredentials: true,
//       }
//     );

//     return res.data;
//   } catch (error: any) {
//     const message =
//       error.response?.data?.message ||
//       error.response?.data ||
//       error.message ||
//       "Unknown error";

//     if (process.env.NODE_ENV === "development") {
//       console.error("Payment order error:", error);
//     }

//     return {
//       success: false,
//       message,
//       error: message,
//     };
//   }
// };
