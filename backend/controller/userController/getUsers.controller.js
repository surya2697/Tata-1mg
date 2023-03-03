
const {UserModel}=require("../../models/users.models")

const getUsers=async(req,res)=>{
    const id=req.param.id

    try {
        if(!id){
            const user=await UserModel.find()
            let count=0
            for(let i=0;i<user.length;i++){
                count++
            }
            res.send({user,count})
        }else{
            const user=await UserModel.findById({_id:id})
            res.send(user)
        }
    } catch (error) {
        res.send(error)
    }
}


module.exports={
    getUsers
}