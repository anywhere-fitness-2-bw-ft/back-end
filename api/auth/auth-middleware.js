const { JWT_SECRET } = require("../secrets");
const User = require("../users/users-model");
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

const checkUsernameExists = async (req, res, next) => {
  try {
    const user = await User.findBy({ username: req.body.username });
    if (!user.length) {
      next({
        status: 401,
        message: "Invalid Credentials",
      });
    } else {
      req.user = user[0];
      next();
    }
  } catch (err) {
    next(err);
  }
};

const only = (role_name) => (req, res, next) => {
  if (req.decodedJwt.role_name !== role_name) {
    next({
      status: 403,
      message: "Access Denied",
    });
  } else {
    next();
  }
};

module.exports = {
  restricted,
  checkUsernameExists,
  only,
};
