
const logoutUser=async(req,res)=>{
    try {
        res.cookie("token",null,{
            expires:new Date(Date.now()),
            httpOnly:true
        })
        res.send({
            msg:"Sucess",
            description:"Logout Sucessfully"
        })

    } catch (error) {
        res.send(error)
    }
}

module.exports={logoutUser}