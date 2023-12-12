import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customer/customerSlice";
import productReducer from "./product/productSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    product: productReducer,
  },
});

export default store;
