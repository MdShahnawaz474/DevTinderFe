import { createSlice } from "@reduxjs/toolkit";
interface FeedUser {
  _id: string;
  [key: string]: any; // For other properties
}
type FeedState = FeedUser[] | null;
const feedSlice = createSlice({
    name:"feed",
    initialState:null as FeedState,
    reducers:{
        addfeed:(_, action)=>{ //Add state state,action for typescript used _ if state not used
            return action.payload;
        },
        removeUserFromFeed:(state,action)=>{
             if (!state) return state;
            const newFeed = state.filter((user:any)=>user._id !== action.payload);
            return newFeed
        }
        
    }
})

export const {addfeed,removeUserFromFeed}= feedSlice.actions;
export default feedSlice.reducer ; 


