import { configureStore } from "@reduxjs/toolkit";
import otpReducer from "../state/otpSlice/otpSlice";

const store = configureStore({
  reducer: {
    otp: otpReducer,
  },
});

export default store;
