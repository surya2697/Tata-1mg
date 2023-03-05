import { GET_PRODUCTS_ERROR,GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCESS } from "./actionType";

import axios from 'axios'

export const getProducts=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})
    try {
        const {data}= await axios.get("http://localhost:8080/products")
        dispatch({type:GET_PRODUCTS_SUCESS,payload:data.data})
    } catch (error) {
        dispatch({
            type:GET_PRODUCTS_ERROR,
            payload:"Failed to fetch the data"
        })
    }
}