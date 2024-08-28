import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    //TODO:add more slices for here
    // post:postSlice
  }
});

export default store;
