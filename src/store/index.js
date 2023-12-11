import { customerReducer } from "./reducers/customerReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  customers: customerReducer,
});

export default rootReducer;
