exports.seed = async function (knex) {
  await knex("roles").insert([
    {
      role_name: "instructor",
    },
    {
      role_name: "client",
    },
  ]);
};
