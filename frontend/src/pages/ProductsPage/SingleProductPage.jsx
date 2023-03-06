import React, { useEffect } from 'react'
import SingleProducts from '../../components/Products/SingleProducts'
import {useDispatch,useSelector} from 'react-redux'
import { getSingleProduct } from '../../Redux/Products/actions'
import { useParams } from 'react-router-dom'
const SingleProductPage = () => {
   const {singleProduct}=useSelector((state)=>state.singleProduct)
   const dispatch=useDispatch()
   //const {id}=useParams()
   useEffect(()=>{
    dispatch(getSingleProduct())
   },[])
  return (
    <div>
      <SingleProducts singleProduct={singleProduct}/>
    </div>
  )
}

export default SingleProductPage
