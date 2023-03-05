require("dotenv").config();
const jwt = require("jsonwebtoken");
const roleChecker = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) {
      return res.send({
        message: "failed",
        description: "you are not authorized",
      });
    } else {
      let verifyToken = jwt.verify(token, process.env.key);
      if (verifyToken) {
        if(verifyToken.role !== "Admin"){
            return res.send({
                message: "failed",
                description: "you are not authorized",
              });
        }else{
            next();
        }
      } else {
        return res.send({
          message: "failed",
          description: "you are not authorized",
        });
      }
    }
  } catch (error) {
    res.send({
      message: "failed",
      description: error.message,
    });
  }
};

module.exports = {roleChecker}
