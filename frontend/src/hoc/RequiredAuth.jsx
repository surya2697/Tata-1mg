import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const navigate=useNavigate()
  const { require} = useSelector((store) => store.auth);
 
 const isAuth= localStorage.getItem("isAuth")||false;
 if(!isAuth){
  require.setMethod(true);
  require.onOpenAuth();
  navigate("/cart")
 }else{
  return children
 }
};

export default RequiredAuth;
