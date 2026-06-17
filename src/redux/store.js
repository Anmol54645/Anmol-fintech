import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import loanReducer from "./loanSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loan: loanReducer,
  },
});