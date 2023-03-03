
const {Router}=require("express")
const {body}=require("express-validator");
const validate=require("../middleware/validator.middleware")
const {registerUser}=require("../controller/userController/register.controller")
const {loginUser}=require("../controller/userController/loginController")
const {getUsers}=require("../controller/userController/getUsers.controller");
const { logoutUser } = require("../controller/userController/logoutuser.controller");
const users=Router()

users.post("/register",
[
    body("name", "Please enter your name").not().isEmpty(),
    body("email", "Please enter your email").isEmail().isEmpty(),
    body("password", "Please enter your password").not().isEmpty(),
  ],
  registerUser)

users.post("/login", validate, loginUser);

users.get("/",getUsers)

users.get("/logout",logoutUser)




module.exports={
    users
}