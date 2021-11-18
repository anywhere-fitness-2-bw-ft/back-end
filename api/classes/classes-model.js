const db = require("../data/db-config");

const find = () => {
  return db("classes as c").join(
    "class_types as ct",
    "c.class_type_id",
    "=",
    "ct.class_type_id"
  );
};

const findClassTypes = () => {
  return db("class_types");
};

const findById = (class_id) => {
  return db("classes as c")
    .join("class_types as ct", "c.class_type_id", "=", "ct.class_type_id")
    .where("class_id", class_id)
    .first();
};

const findBy = (filter) => {
  return db("classes as c")
    .join("class_types as ct", "c.class_type_id", "=", "ct.class_type_id")
    .where(filter);
};

const addClass = async (newClass) => {
  return await db("classes").insert(newClass, [
    "name",
    "class_type_id",
    "start_time",
    "duration",
    "intensity_level",
    "location",
    "registered_attendees",
    "max_size",
  ]);
};

const addClassType = async (newType) => {
  const [newClassType] = await db("class_types").insert(
    { class_type_name: newType },
    ["class_type_id", "class_type_name"]
  );
  return newClassType;
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
  addClassType,
  findClassTypes,
};
