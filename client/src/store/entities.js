import { combineReducers } from "redux";
import productsReducer from "./productSlice";
import cartReducer from "./cartSlice";

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
