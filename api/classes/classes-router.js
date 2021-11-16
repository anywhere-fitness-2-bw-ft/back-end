const router = require("express").Router();
const Classes = require("./classes-model");
const { checkId } = require("./classes-middleware");

router.get("/", async (req, res, next) => {
  try {
    const users = await Classes.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkId, (req, res, next) => {
  try {
    res.json(req.classById);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newClass = await Classes.addClass(req.body);
    res.status(201).json(newClass);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", checkId, async (req, res, next) => {
  try {
    const updatedClass = await Classes.updateClass(req.params.id, req.body);
    res.status(200).json(updatedClass);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", checkId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedClass = await Classes.deleteClass(id);
    res.status(200).json(deletedClass);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
