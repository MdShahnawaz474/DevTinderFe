import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedreducer from "./feedSlice"
import connectionReducer  from "./connectionSlice";
import requestReducer from "./requestSlice";
const appStore = configureStore({
    reducer:{
        user:userReducer,
        feed:feedreducer,
        connections:connectionReducer,
        request:requestReducer
    }
});


export default appStore;

export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch