import { GET_PRODUCTS_ERROR,GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCESS,GET_SINGLE_PRODUCTS_ERROR,GET_SINGLE_PRODUCTS_LOADING,GET_SINGLE_PRODUCTS_SUCCESS } from "./actionType";

export const productReducer=(
    state={products:[]},{type,payload}
)=>{
   switch(type){
    case GET_PRODUCTS_LOADING:{
        return {...state,loading:true}
    }
    case GET_PRODUCTS_SUCESS:{
        return {
            ...state,
            loading:false,
            products:payload.product
        }
    }
    case GET_PRODUCTS_ERROR:{
        return {
            ...state,
            loading:false,
            error:payload.error
        }
    }
    default:
        return state
   }
}


export const singleProductReducer = (state = { singleProduct: [] }, action) => {
    switch (action.type) {
      case GET_SINGLE_PRODUCTS_LOADING: {
        return { ...state, loading: true, error: false, singleProduct: [] };
      }
      case GET_SINGLE_PRODUCTS_SUCCESS: {
        return { ...state, loading: false, singleProduct: action.payload };
      }
      case GET_SINGLE_PRODUCTS_ERROR: {
        return { ...state, loading: false, error: true, singleProduct: [] };
      }
      default: {
        return state;
      }
    }
  };