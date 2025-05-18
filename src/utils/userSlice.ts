import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../types/Types";

const userSlice = createSlice({
  name: "user",
  initialState: null as User | null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;