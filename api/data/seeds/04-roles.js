exports.seed = async function (knex) {
  await knex("user_classes").insert([
    {
      role_name: "instructor",
    },
    {
      role_name: "client",
    },
  ]);
};
