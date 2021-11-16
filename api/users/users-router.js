const router = require("express").Router();
const Users = require("./users-model");
const { checkId } = require("./users-middleware");
const bcrypt = require("bcryptjs");

router.get("/", async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkId, (req, res, next) => {
  try {
    res.json(req.user);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", checkId, async (req, res, next) => {
  try {
    const { username, password, role_id } = req.body;
    const hash = bcrypt.hashSync(password, 6);
    const updUser = await Users.updateUser(req.params.id, {
      username,
      password: hash,
      role_id,
    });
    res.status(200).json(updUser);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", checkId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await Users.deleteUser(id);
    res.status(200).json(deletedUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
