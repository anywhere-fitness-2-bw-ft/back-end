exports.seed = async function (knex) {
  await knex("class_types").insert([
    {
      class_type_name: "running",
    },
    {
      class_type_name: "swimming",
    },
  ]);
};
