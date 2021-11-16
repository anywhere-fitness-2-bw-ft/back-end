const router = require("express").Router();
const Users = require("./users-model");
const { checkId } = require("./users-middleware");

router.get("/", async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const user = await Users.findById(user_id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newUser = await Users.addUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", checkId, async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const delUser = await Users.deleteUser(user_id);
    res.status(200).json(delUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
