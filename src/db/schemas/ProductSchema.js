const ProductSchema = {
  name: "Customer",
  properties: {
    productId: "string",
    productName: "string",
    productPrice: "string",
    productDescription: "string",
    productImage: "string?",
  },
  primaryKey: "customerId",
};

export { ProductSchema };
