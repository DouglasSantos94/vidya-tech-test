import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (
      state,
      {
        payload: {
          productName,
          productPrice,
          procuctDescription,
          productImage,
        },
      }
    ) => {
      state.products.push({
        productId: uuid(),
        productName,
        productPrice,
        procuctDescription,
        productImage,
      });
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
