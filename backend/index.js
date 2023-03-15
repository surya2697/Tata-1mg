const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const ProductRouter = require("./router/product.route");
const UserRouter = require("./router/User.router");
const connection =require("./config/db")
dotenv.config();
const app = express();


app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",(req,res)=>{
  res.send("Hello this is from backend")
})


//Product Route
app.use("/products", ProductRouter);

//User Route
app.use("/user", UserRouter);

app.listen(process.env.port,()=>{
  connection()
  console.log(`Server started on the ${process.env.port}`)
})
