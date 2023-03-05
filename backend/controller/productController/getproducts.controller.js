const {ProductModel}=require("../../models/products.models")

const {Router}=require("express")
const getProducts=Router()



getProducts.get("/",async(req,res)=>{
    try {
        const product=await ProductModel.find()
       // res.send(product)
        let productCount = 0;
    for(let i=0; i<product.length; i++){
      productCount++;
    }
    return res.send({productCount,product});
    } catch (error) {
        res.send({msg:"Failed",error:error.message})
    }
    
})
getProducts.get("/:id",async(req,res)=>{
    let {id}=req.params
    try {
        const product=await ProductModel.findById({_id:id})
        res.send(product)
    } catch (error) {
        res.send({msg:"Failed",error:error.message})
    }
})


module.exports={
    getProducts
}