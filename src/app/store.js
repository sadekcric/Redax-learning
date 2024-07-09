import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postsSlice";

const store = configureStore({
  reducer: {
    counter: countersReducer,
    posts: postsReducer,
  },
});

export default store;
