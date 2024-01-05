const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  try {
    console.log("req.headers.authorization",req.headers.authorization);
    if (!req.headers.authorization) {
        
      return res.status(403).json({
        success: false,
        message: `Forbidden`,
      });
    }
    const token = req.headers.authorization.split(" ").pop();
  console.log("token from authentication", token);
    jwt.verify(token, process.env.SECRET, (err, result) => {
      if (err) {
        res.status(403).json({
          success: false,
          message: `The token is invalid or expired`,
        });
      } else {
        console.log("result from authentication",result);
        req.token = result;
        next();
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      err: err.message,
    });
  }
};

module.exports = authentication;