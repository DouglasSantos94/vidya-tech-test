import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

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
          customerName,
          customerCnpj,
          customerPhoneNumber,
          customerZipCode,
          customerState,
          customerCity,
          customerNeighborhood,
          customerStreet,
          customerNumber,
          customerComplement,
        },
      }
    ) => {
      state.customers.push({
        customerId: uuid.v4(),
        customerName,
        customerCnpj,
        customerPhoneNumber,
        customerZipCode,
        customerState,
        customerCity,
        customerNeighborhood,
        customerStreet,
        customerNumber,
        customerComplement,
      });
    },
  },
});

export const { addCustomer } = customerSlice.actions;
export default customerSlice.reducer;
