const jwt = require("jsonwebtoken");
const verifyJWT = async (req, res, next) => {
  let token;
  try {
    const authHeader = req.headers.authorization;
    console.log(req.headers.authorization);
    if (!authHeader) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    console.log("second if run");
    if (authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    } else {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    console.log("code decoded run");
    console.log(token);
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = { verifyJWT };
