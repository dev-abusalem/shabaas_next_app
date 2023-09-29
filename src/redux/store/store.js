import { configureStore } from "@reduxjs/toolkit";
import otpReducer from "../state/otpSlice/otpSlice";
import onboardReducer from "../state/onboardSlice/onboardSlice";

const store = configureStore({
  reducer: {
    otp: otpReducer,
    onboard: onboardReducer,
  },
});

export default store;
