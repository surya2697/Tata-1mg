require('dotenv').config()
const jwt=require("jsonwebtoken")


const authenticator=async(req,res,next)=>{
     const token=req.headers.authorization

     try {
        if(token){
            const decoded=await jwt.verify(token,process.env.key)
            if(decoded){
                req.userId=decoded.id
                next()
            }else{
                res.send({
                    msg:"failed",
                    description:"You are not authorized,login please"
                })
            }
        }else{
            res.send({
                msg:"failed",
                description:"You are not authorized,login please"
            })
        }
     } catch (error) {
        res.send({
            msg:"failed",
            description:"You are not authorized,login please",
            error:error.message
        })
     }
} 

module.exports={authenticator}