const User = require("../users/users-model");

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

const checkUsernameUnique = async (req, res, next) => {
  try {
    const userName = await User.findBy({ username: req.body.username });
    if (userName.length) {
      next({
        message: "Username already exists.",
      });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkUsernameExists,
  checkUsernameUnique,
};
