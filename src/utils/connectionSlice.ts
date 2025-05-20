import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: null,
  reducers: {
    addConnections: (_, action) => action.payload,  //Add state state,action for typescript used _ if state not used
    removeConnection: () => null,
  },
});

export const {addConnections,removeConnection}= connectionSlice.actions
export default connectionSlice.reducer;
