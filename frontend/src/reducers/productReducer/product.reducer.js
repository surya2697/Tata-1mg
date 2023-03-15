import {
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_DISCOUNT_PRODUCT_SUCCESS,
  GET_FILTERED_PROUDCT_SUCCESS,
  GET_SINGLE_PRODUCT_FAIL,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "../../constants/reducer.constants.js/product.constants";

export const productListReducer = (
  state = { products: [], filteredProducts: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_REQUEST: {
      return { ...state, loading: true };
    }
    case GET_ALL_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: action.payload,
        filteredProducts: action.payload,
      };
    }
    case GET_ALL_PRODUCT_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }
    case GET_FILTERED_PROUDCT_SUCCESS: {
      return { ...state, filteredProducts: action.payload };
    }
    case GET_DISCOUNT_PRODUCT_SUCCESS: {
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload,
      };
    }
    default:
      return state;
  }
};

export const singleProductReducer = (state = { singleProduct: [] }, action) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCT_REQUEST: {
      return { ...state, loading: true, error: false, singleProduct: [] };
    }
    case GET_SINGLE_PRODUCT_SUCCESS: {
      return { ...state, loading: false, singleProduct: action.payload };
    }
    case GET_SINGLE_PRODUCT_FAIL: {
      return { ...state, loading: false, error: true, singleProduct: [] };
    }
    default: {
      return state;
    }
  }
};
