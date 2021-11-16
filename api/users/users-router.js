const router = require("express").Router();
const Users = require("./users-model");
const { checkId } = require("./users-middleware");

router.get("/", (req, res, next) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Users.addUser(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next);
});

router.delete("/:id", checkId, (req, res, next) => {
  const { id } = req.params;
  Users.deleteUser(id)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

module.exports = router;
