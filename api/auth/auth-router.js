const router = require("express").Router();
const Users = require("../users/users-model");
const bcrypt = require("bcryptjs");
const tokenBuilder = require("./token-builder");
const Auth = require("./auth-model");
const { checkUsernameExists } = require("./auth-middleware");

router.post("/register", async (req, res, next) => {
  const { username, password, role_id } = req.body;
  const hash = bcrypt.hashSync(password, 6);
  try {
    const newUser = await Auth.addUser({
      username,
      password: hash,
      role_id,
    });
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.post("/login", checkUsernameExists, (req, res, next) => {
  if (bcrypt.compareSync(req.body.password, req.user.password)) {
    const token = tokenBuilder(req.user);
    res.json({
      status: 200,
      message: `Welcome, ${req.user.username}.`,
      token,
    });
  } else {
    next({ status: 401, message: "Invalid credentials" });
  }
});

module.exports = router;
