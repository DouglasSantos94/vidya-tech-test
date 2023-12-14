import Realm from "realm";
import { CustomerSchema } from "./schemas/CustomerSchema";

export const getRealm = async () =>
  await Realm.open({
    path: "orders-app",
    schema: [CustomerSchema, ProductSchema],
    schemaVersion: 3,
  });
