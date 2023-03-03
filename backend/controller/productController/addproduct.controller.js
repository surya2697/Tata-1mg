require('dotenv').config()
const {ProductModel}=require("../../models/products.models")
const {Router}=require("express")
const addproduct=Router()

addproduct.post("/add",async(req,res)=>{
    let details=req.body
    try {
        const product=new ProductModel(details)
        await product.save()
        res.send({msg:"Product sucessfully added"})
    } catch (error) {
        res.send({msg:"Failed",error:error.message})
    }
})


module.exports={
    addproduct
}