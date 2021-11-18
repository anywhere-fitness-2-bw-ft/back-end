const Classes = require("../classes/classes-model");
const db = require("../data/db-config");

const checkId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const classById = await Classes.findById(id);
    !classById
      ? res.status(404).json({ message: "Class not found." })
      : (req.classById = classById);
    next();
  } catch (err) {
    next(err);
  }
};

const checkUniqueType = async (req, res, next) => {
  try {
    let [classType] = await db("class_types").where(
      "class_type_name",
      req.body.class_type_name
    );
    if (!classType) {
      const newClassType = await Classes.addClassType(req.body.class_type_name);
      req.classType = newClassType;
      next();
    } else {
      req.classType = classType;
      next();
    }
  } catch (error) {
    next(error);
  }
};

// const addNewClassType = async (req, res, next) => {
//   try {
//     console.log(req.classType);
//     if (!req.classType) {
//       const newClassType = await Classes.addClassType(req.body.class_type_name);
//       req.classType = newClassType;
//       next();
//     } else {
//       next();
//     }
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = { checkId, checkUniqueType };
