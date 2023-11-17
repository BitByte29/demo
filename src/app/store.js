import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../features/todo/slice";

//store must be aware of the reducers so we export it from there
export const store = configureStore({
  reducer: todoReducer,
});
