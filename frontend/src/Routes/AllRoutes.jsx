import React from 'react'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navbar/Navigation'
import { Routes,Route } from 'react-router-dom'
import HomePage from '.././pages/Homepage/Homepage'
const AllRoutes = () => {
  return (
    <div>
      <Navigation/>
       <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
       </Routes>
      <Footer/>
    </div>
  )
}

export default AllRoutes
