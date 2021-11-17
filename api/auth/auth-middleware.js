const User = require("../users/users-model");
const { INSTRUCTOR_SECRET } = require("../secrets");

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
        message: "Username already taken.",
      });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const validateRole = (req, res, next) => {
  const { role_id } = req.body;
  if (!role_id) {
    next({ status: 418, message: "Role not selected" });
  } else if (role_id === 1 && req.body.auth === INSTRUCTOR_SECRET) {
    req.body.role_id = role_id;
  } else if (role_id === !req.body.auth) {
    next({ status: 403, message: "Instructor Code Required" });
  } else if (role_id === 1 && req.body.auth !== INSTRUCTOR_SECRET) {
    next({ status: 403, message: "Invalid Instructor Code" });
  } else {
    next();
  }
};

module.exports = {
  checkUsernameExists,
  checkUsernameUnique,
  validateRole,
};
