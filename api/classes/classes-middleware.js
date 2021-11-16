const { JWT_SECRET } = require("../secrets");
const Classes = require("../classes/classes-model");
const jwt = require("jsonwebtoken");

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next({
      status: 401,
      message: "Token Required",
    });
  }
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return next({
        status: 401,
        message: "Token Invalid",
      });
    }
    req.decodedJwt = decoded;
    next();
  });
};

module.exports = { restricted };
