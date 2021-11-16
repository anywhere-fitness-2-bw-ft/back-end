const Users = require("./users-model");

const checkId = async (req, res, next) => {
  const { id } = req.params;
  const user = await Users.findById(id);
  !user
    ? res.status(404).json({ message: "User not found" })
    : (req.user = user);
  next();
};

module.exports = {
  checkId,
};
