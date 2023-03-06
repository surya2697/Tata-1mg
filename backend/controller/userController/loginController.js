require("dotenv").config();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const {UserModel} = require("../../models/users.models");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      const verify = await argon2.verify(user.password, password);
      if (verify) {
        const details = {
          id: user._id,
          name: user.name,
          email: user.email,
          mobile:user.mobile,
          role: user.role,
        };
        const token = jwt.sign(details, process.env.key, {
          expiresIn: "2 days",
        });
       
        return res.status(200).cookie("token", token, {
            expires:new Date(Date.now()+25892000000),
            httpOnly:true
        }).send({
          message: "success",
          description: "Logged In Successfully",
          token,
          user
        });
      } else {
        return res.status(401).send({ message: "failed", description: "Wrong Credentials" });
      }
    } else {
      return res.status(401).send({ message: "failed", description: "Invalid Credentials" });
    }
  } catch (error) {
    return res.status(401).send({ message: "failed", description: error.message });
  }
};

module.exports = {loginUser}
