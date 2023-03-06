import React from 'react'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navbar/Navigation'
import { Routes,Route } from 'react-router-dom'
import HomePage from '.././pages/Homepage/Homepage'
import Products from '../pages/ProductsPage/Products'
import SingleProductPage from '../pages/ProductsPage/SingleProductPage'

import Login from '../pages/Login/Login'

const AllRoutes = () => {
  return (
    <div>
      <Navigation/>
       <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<SingleProductPage/>}></Route>
     
        <Route path='/login' element={<Login/>}></Route>
       </Routes>
      <Footer/>
    </div>
  )
}

export default AllRoutes
