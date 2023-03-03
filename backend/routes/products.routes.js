const {Router}=require("express")
const products=Router()
const {addproduct}=require("../controller/productController/addproduct.controller")

products.post("/add",addproduct)


module.exports={
    products
}