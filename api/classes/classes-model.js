const db = require("../data/db-config");

function find() {
  return db("classes");
}

function findById(class_id) {
  return db("classes").where("class_id", class_id);
}

function findBy(filter) {
  return db("classes").where(filter);
}

module.exports = {
  find,
  findBy,
  findById,
};
