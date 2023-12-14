const CustomerSchema = {
  name: "Customer",
  properties: {
    customerId: "string",
    customerName: "string",
    customerCnpj: "string",
    customerPhoneNumber: "string",
    customerZipCode: "string",
    customerState: "string",
    customerCity: "string",
    customerNeighborhood: "string",
    customerStreet: "string",
    customerNumber: "string",
    customerComplement: "string?",
  },
  primaryKey: "customerId",
};

export { CustomerSchema };
