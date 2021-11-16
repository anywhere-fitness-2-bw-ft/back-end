const db = require("../data/db-config");

function findBy(filter) {
  return db("users as u")
    .join("roles as r", "u.role_id", "=", "r.role_id")
    .select("u.user_id", "u.username", "r.role_name", "u.password")
    .where(filter);
}

module.exports = {
  findBy,
};
