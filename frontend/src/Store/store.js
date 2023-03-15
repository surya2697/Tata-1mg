import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  singleProductReducer,
} from "../reducers/productReducer//product.reducer";
import { cartReducer } from "../reducers/productReducer/cart.reducer";
import { authReducer } from "./authentication/auth.reducer";


const reducer = combineReducers({
  productList: productListReducer,
  auth: authReducer,
  cart: cartReducer,
  singleProduct: singleProductReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
};

const middleware = [thunk];

const store = legacy_createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
