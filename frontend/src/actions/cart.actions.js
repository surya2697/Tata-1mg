import {
  ADD_ITEM_TO_CART_SUCCESS,
  LOAD_CART_ITEMS,
} from "../constants/reducer.constants.js/cart.constants";

export const addItemToCart = (payload) => (dispatch) => {
  
  localStorage.setItem("cartItems", JSON.stringify(payload));
  dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: payload });
};

export const updateCartCount = (payload) => (dispatch) => {
 
  localStorage.setItem("cartItems", JSON.stringify(payload));
  dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: payload });
};

