const Classes = require("../classes/classes-model");

const checkId = async (req, res, next) => {
  const { id } = req.params;
  const classById = await Classes.findById(id);
  !classById
    ? res.status(404).json({ message: "Class not found" })
    : (req.classById = classById);
  next();
};

module.exports = { checkId };
