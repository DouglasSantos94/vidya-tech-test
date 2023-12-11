import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customer/customerSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
});
export default store;
