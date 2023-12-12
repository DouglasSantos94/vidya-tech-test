import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  products: [
    {
      id: "1",
      name: "Item 1",
      price: 20.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut diam sed metus commodo egestas. Nam pellentesque neque tortor. Donec nunc nunc, tempus eu luctus at, semper a magna. Pellentesque auctor accumsan sem id eleifend. Pellentesque venenatis nunc vel eros mollis tristique. Nam et erat tristique velit scelerisque rhoncus. Donec bibendum, elit in viverra blandit, enim velit pharetra ex, id lacinia justo elit eu velit. Integer porta auctor quam dapibus varius. Etiam scelerisque ullamcorper risus at pretium.",
    },
    {
      id: "2",
      name: "Item 2",
      price: 19.9,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut diam sed metus commodo egestas. Nam pellentesque neque tortor. Donec nunc nunc, tempus eu luctus at, semper a magna. Pellentesque auctor accumsan sem id eleifend. Pellentesque venenatis nunc vel eros mollis tristique. Nam et erat tristique velit scelerisque rhoncus. Donec bibendum, elit in viverra blandit, enim velit pharetra ex, id lacinia justo elit eu velit. Integer porta auctor quam dapibus varius. Etiam scelerisque ullamcorper risus at pretium.",
    },
    {
      id: "3",
      name: "Item 3",
      price: 14.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut diam sed metus commodo egestas. Nam pellentesque neque tortor. Donec nunc nunc, tempus eu luctus at, semper a magna. Pellentesque auctor accumsan sem id eleifend. Pellentesque venenatis nunc vel eros mollis tristique. Nam et erat tristique velit scelerisque rhoncus. Donec bibendum, elit in viverra blandit, enim velit pharetra ex, id lacinia justo elit eu velit. Integer porta auctor quam dapibus varius. Etiam scelerisque ullamcorper risus at pretium.",
    },
    {
      id: "4",
      name: "Item 4",
      price: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut diam sed metus commodo egestas. Nam pellentesque neque tortor. Donec nunc nunc, tempus eu luctus at, semper a magna. Pellentesque auctor accumsan sem id eleifend. Pellentesque venenatis nunc vel eros mollis tristique. Nam et erat tristique velit scelerisque rhoncus. Donec bibendum, elit in viverra blandit, enim velit pharetra ex, id lacinia justo elit eu velit. Integer porta auctor quam dapibus varius. Etiam scelerisque ullamcorper risus at pretium.",
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, { payload: { name, price, description } }) => {
      state.products.push({
        id: uuid(),
        name,
        price,
        description,
      });
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
