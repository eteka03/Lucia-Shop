import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { userReducer } from "./user/user.reducer";
import { checkoutReducer } from "../redux/checkout/checkout.reducers";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import shopReducer from "./shop/shop.reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  checkout: checkoutReducer,
});

export default persistReducer(persistConfig, rootReducer);
