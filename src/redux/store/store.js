// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../state/userSlice'; // Import your userSlice reducer here

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add more reducers if needed
  },
});

export default store;

