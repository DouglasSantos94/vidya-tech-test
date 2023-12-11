import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  customers: [],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (
      state,
      {
        payload: {
          name,
          cnpj,
          phoneNumber,
          zipCode,
          customerState,
          city,
          neighborHood,
          street,
          number,
        },
      }
    ) => {
      state.customers.push({
        id: uuid(),
        name,
        cnpj,
        phoneNumber,
        zipCode,
        customerState,
        city,
        neighborHood,
        street,
        number,
      });
    },
  },
});

export const { addCustomer } = customerSlice.actions;
export default customerSlice.reducer;
