import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import hotReducer from "../features/hotCoffe/hotSlice";
import icedReducer from "../features/icedCoffe/icedSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    hot: hotReducer,
    iced: icedReducer,
  },
});
