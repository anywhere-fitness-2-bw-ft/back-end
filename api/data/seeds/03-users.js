exports.seed = async function (knex) {
  await knex("users").insert([
    {
      username: "User 1",
      password: "pwd",
      role_id: 1,
    },
    {
      username: "User 2",
      password: "pwd",
      role_id: 2,
    },
    {
      username: "User 3",
      password: "pwd",
      role_id: 1,
    },
    {
      username: "User 4",
      password: "pwd",
      role_id: 2,
    },
  ]);
};
