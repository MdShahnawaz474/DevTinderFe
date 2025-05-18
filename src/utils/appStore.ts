import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedreducer from "./feedSlice"
const appStore = configureStore({
    reducer:{
        user:userReducer,
        feed:feedreducer
    }
});


export default appStore;

export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch