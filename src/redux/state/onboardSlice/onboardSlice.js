import { createSlice } from "@reduxjs/toolkit";

const onboardSlice = createSlice({
  name: "onboard",
  initialState: {},
  reducers: {
    setOnboard: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setOnboard } = onboardSlice.actions;
export default onboardSlice.reducer;
