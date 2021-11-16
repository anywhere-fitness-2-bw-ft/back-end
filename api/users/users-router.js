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
    const { id } = req.params;
    const user = await Users.findById(id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", checkId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const delUser = await Users.deleteUser(id);
    res.status(200).json(delUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
