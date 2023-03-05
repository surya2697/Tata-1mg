const {Router}=require("express")
const products=Router()
const {addproduct}=require("../controller/productController/addproduct.controller")
const { deleteProduct } = require("../controller/productController/deleteproduct.controller")
const { getProducts } = require("../controller/productController/getproducts.controller")
const { roleChecker } = require("../middleware/role.middleware")

products.post("/add",addproduct,roleChecker)
products.get("/",getProducts)
products.delete("/delete/:id",deleteProduct)
products.get("/:id",getProducts)


module.exports={
    products
}