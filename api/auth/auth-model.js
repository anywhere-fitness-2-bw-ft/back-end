const db = require("../data/db-config");

const findById = (id) => {
  return db("users").where("user_id", id).first();
};

const findBy = (username) => {
  return db("users").where("username", username).first();
};

const addUser = async ({ username, password, role_id }) => {
  await db("users").insert({
    username,
    password,
    role_id,
  });
};

module.exports = {
  addUser,
  findById,
  findBy,
};
