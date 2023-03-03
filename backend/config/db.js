const mongoose  = require('mongoose')
mongoose.set("strictQuery", false);

require('dotenv').config()

const connection=()=>{
    try {
        const connect= mongoose.connect(process.env.mongoURL)
        console.log("Connected to mongoDb")
    } catch (error) {
        console.log(error)
    }
}
module.exports=connection