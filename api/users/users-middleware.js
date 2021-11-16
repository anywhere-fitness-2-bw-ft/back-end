const Users = require("./users-model");

const checkId = async (req, res, next) => {
  const { id } = req.params;
  const check = await Users.findById(id);
  !check ? res.status(404).json({ message: "User not found" }) : next();
};

module.exports = {
  checkId,
};
