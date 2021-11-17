const db = require("../data/db-config");

const find = () => {
  return db("users as u")
    .join("roles as r", "u.role_id", "=", "r.role_id")
    .select("u.user_id", "u.username", "r.role_name");
};

const findById = (user_id) => {
  return db("users as u")
    .join("roles as r", "u.role_id", "=", "r.role_id")
    .select("u.user_id", "u.username", "r.role_name")
    .where("u.user_id", user_id)
    .first();
};

const findBy = (filter) => {
  return db("users as u")
    .join("roles as r", "u.role_id", "=", "r.role_id")
    .select("u.user_id", "u.username", "r.role_name", "u.password")
    .where(filter);
};

const addUser = async (user) => {
  const [newUser] = await db("users").insert(user, [
    "username",
    "password",
    "role_id",
  ]);
  return newUser;
};

const updateUser = async (user_id, user) => {
  await db("users").update(user).where("user_id", user_id);
  return findById(user_id);
};

const deleteUser = (user_id) => {
  return db("users").where("user_id", user_id).del();
};

module.exports = {
  find,
  findBy,
  findById,
  addUser,
  deleteUser,
  updateUser,
};
