const {ProductModel} = require("../../models/products.models");
const {Router}=require("express")
const deleteProduct=Router()


deleteProduct.delete("/delete/:id",async(req,res)=>{
    let {id}=req.params
    try {
            let result=await ProductModel.findByIdAndDelete({_id:id})
            if(result){
                return res.send({
                   msg:"Sucesss",
                   description:"Product has been deleted"
                })
    
        }else{
            return res.send({
                msg:"Failed",
                description:"Product not find"
             })
        }
    } catch (error) {
        return res.send({
            msg:"Failed",
            description:error.message
         })
    }
})


module.exports = {deleteProduct}
