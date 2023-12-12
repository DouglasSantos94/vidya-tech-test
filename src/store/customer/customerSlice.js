import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  customers: [
    {
      id: "1",
      name: "Item 1",
      cnpj: "cnpj 1",
      phoneNumber: "11111",
      zipCode: "2324",
      customerState: "ffd",
      city: "vsdzv",
      neighborhood: "fsedf",
      street: "fsdf",
      number: 12,
    },
    {
      id: "2",
      name: "Item 2",
      cnpj: "cnpj 2",
      phoneNumber: "11111",
      zipCode: "2324",
      customerState: "ffd",
      city: "vsdzv",
      neighborhood: "fsedf",
      street: "fsdf",
      number: 12,
    },
    {
      id: "3",
      name: "Item 3",
      cnpj: "cnpj 3",
      phoneNumber: "11111",
      zipCode: "2324",
      customerState: "ffd",
      city: "vsdzv",
      neighborhood: "fsedf",
      street: "fsdf",
      number: 12,
    },
  ],
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
          neighborhood,
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
        neighborhood,
        street,
        number,
      });
    },
  },
});

export const { addCustomer } = customerSlice.actions;
export default customerSlice.reducer;
