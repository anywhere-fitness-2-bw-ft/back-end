const router = require("express").Router();
const Classes = require("./classes-model");
const { checkId, checkUniqueType } = require("./classes-middleware");

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

router.post("/", checkUniqueType, async (req, res, next) => {
  let {
    name,
    start_time,
    duration,
    intensity_level,
    location,
    registered_attendees,
    max_size,
  } = req.body;
  // const class_type_id = req.classType[0].class_type_id;
  // console.log(req.classType[0].class_type_id);
  try {
    const newClass = await Classes.addClass({
      name,
      class_type_id: req.classType.class_type_id,
      start_time,
      duration,
      intensity_level,
      location,
      registered_attendees,
      max_size,
    });
    res.status(201).json(newClass);
  } catch (error) {
    next(error);
  }
});

router.post("/classtypes", async (req, res, next) => {
  try {
    const newClass = await Classes.addClassType(req.body.class_type_name);
    res.status(201).json(newClass);
  } catch (error) {
    next(error);
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
