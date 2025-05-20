import { createSlice } from "@reduxjs/toolkit";
// Define the UserType for nested user object
interface UserType {
  _id: string;
  firstName: string;
  lastName: string;
  photoUrl?: string;
  about?: string;
  gender?: string;
  age?: number;
  skills: string[];
}

// Define the correct RequestType based on your actual API response
interface RequestType {
  _id: string;
  fromUserId: UserType;
  toUserId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const requestSlice = createSlice({
    name:"request",
    initialState:[] as RequestType[],
    reducers:{
        addRequest : (_,action)=>action.payload,
        removeRequest :(state,action)=>{
            const newArray = state.filter(r=>r._id !== action.payload)
            return newArray 
        }
    }
})

export const {addRequest,removeRequest} = requestSlice.actions;
export default requestSlice.reducer;