// otpSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  otpValue: "", // You can add more OTP-related state here
};

const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    setOTP: (state, action) => {
      state.otpValue = action.payload;
    },
  },
});

export const { setOTP } = otpSlice.actions;
export default otpSlice.reducer;
