const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{type:String},
    password:{tyepe:String},
    email:{type:String},
    mobile:{type:Number},
    role:{type:String, default:"Explorer"},
    

})

const UserModel=mongoose.model("users",userSchema)

module.exports={
    UserModel
}