
require('dotenv').config()
const express=require("express")
const app=express()
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const agron2=require("argon2")
const {UserModel}=require("../../models/users.models")

const registerUser=async(req,res)=>{
    const {name,email,password}=req.body
    try {
        const hashPassword=await agron2.hash(password)
        const user= new UserModel({name,email,password:hashPassword})
        const token=jwt.sign({id:user._id,name,email},process.env.key)
        await user.save()
        res.send({msg:"success",description:"Successfully Registered",token,user})
    } catch (error) {
        res.send({ message: "failed", description: error.message });
    }
}

module.exports={
    registerUser
}