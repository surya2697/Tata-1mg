import { ADD_ITEM_TO_CART_SUCCESS } from "../../constants/reducer.constants.js/cart.constants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART_SUCCESS: {
      return { ...state, cartItems: action.payload };
    }
    default:
      return state;
  }
};
