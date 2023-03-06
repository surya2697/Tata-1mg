import { GET_PRODUCTS_ERROR,GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCESS, GET_SINGLE_PRODUCTS_ERROR, GET_SINGLE_PRODUCTS_LOADING, GET_SINGLE_PRODUCTS_SUCCESS } from "./actionType";

import axios from 'axios'

//Get all products
export const getProducts=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})
    try {
       let res=await fetch("http://localhost:8080/products")
       let data=await res.json()
       console.log(data)
       dispatch({type:GET_PRODUCTS_SUCESS,payload:data})
    } catch (error) {
        dispatch({
            type:GET_PRODUCTS_ERROR,
            payload:"Failed to fetch the data"
        })
    }
}
//get single product 

export const getSingleProduct=(id)=>async(dispatch)=>{
    dispatch({type:GET_SINGLE_PRODUCTS_LOADING})
    try {
        let res=await fetch(`http://localhost:8080/products/${id}`)
        let data=await res.json()
        console.log(data)
        dispatch({type:GET_SINGLE_PRODUCTS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_SINGLE_PRODUCTS_ERROR,payload:"Failed to get data"})
    }
}