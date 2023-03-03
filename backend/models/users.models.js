const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String, default:"Explorer"},
    

})

const UserModel=mongoose.model("users",userSchema)

module.exports={
    UserModel
}