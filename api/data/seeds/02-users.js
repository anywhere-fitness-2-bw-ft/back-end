exports.seed = async function (knex) {
  //   await knex("users").truncate();
  await knex("users").insert([
    {
      username: "User 1",
      password: "pwd",
      role: "instructor",
    },
    {
      username: "User 2",
      password: "pwd",
      role: "client",
    },
    {
      username: "User 3",
      password: "pwd",
      role: "instructor",
    },
    {
      username: "User 4",
      password: "pwd",
      role: "client",
    },
  ]);
};
