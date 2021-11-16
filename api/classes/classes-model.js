const db = require("../data/db-config");

const find = () => {
  return db("classes");
};

const findById = (class_id) => {
  return db("classes").where("class_id", class_id);
};

const findBy = (filter) => {
  return db("classes").where(filter);
};

const addClass = async (newClass) => {
  await db("classes").insert(newClass);
};

const updateClass = async (class_id, classDetails) => {
  await db("classes").update(classDetails).where("class_id", class_id);
  return findById(class_id);
};

const deleteClass = (class_id) => {
  return db("classes").where("class_id", class_id).del();
};

module.exports = {
  find,
  findBy,
  findById,
  addClass,
  updateClass,
  deleteClass,
};
