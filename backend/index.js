require('dotenv').config()
const express=require("express")
const  connection  = require("./config/db")
const { users } = require('./routes/users.routes')
const {products}=require("./routes/products.routes")
const cookieParser = require("cookie-parser");
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Hello this is from backend")
})

app.use("/users",users)
app.use("/products",products)





app.listen(process.env.port,()=>{
    connection()
    console.log(`Server started on the ${process.env.port}`)
})