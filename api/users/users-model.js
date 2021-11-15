const db = require("../data/db-config");

function find() {
  return db("users as u");
}

module.exports = {
  find,
};
