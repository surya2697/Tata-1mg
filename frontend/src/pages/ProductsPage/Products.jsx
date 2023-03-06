import {Box,Flex,Button,Grid,Select,Text,Spinner} from "@chakra-ui/react"
import { getProducts } from "../../Redux/Products/actions"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import ProductList from "../../components/Products/ProductList"


const Products=()=>{
    const {products}=useSelector((state)=>state.productsList)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProducts())
    },[])
    return (
        <Box>
           
            <Box>
                <Flex justifyContent="space-between">
                    {
                        <ProductList products={products}/>
                    }
                </Flex>
            </Box>
           
        </Box>
    )
}
export default Products