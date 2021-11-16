const db = require("../data/db-config");

function find() {
  return db("users as u")
    .join("roles as r", "u.role_id", "=", "r.role_id")
    .select("u.user_id", "u.username", "r.role_name");
}

function findBy(filter) {
  return db("users as u")
    .join("roles as r", "u.role_id", "=", "r.role_id")
    .select("u.user_id", "u.username", "r.role_name", "u.password")
    .where(filter);
}

function findById(user_id) {
  return db("users as u")
    .join("roles as r", "u.role_id", "=", "r.role_id")
    .select("u.user_id", "u.username", "r.role_name")
    .where("u.user_id", user_id)
    .first();
}

const addUser = async ({ username, password, role_id }) => {
  await db("users").insert({
    username,
    password,
    role_id,
  });
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
};
