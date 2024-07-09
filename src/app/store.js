import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: countersReducer,
  },
});

export default store;
