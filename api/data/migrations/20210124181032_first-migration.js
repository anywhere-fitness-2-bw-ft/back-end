exports.up = async (knex) => {
  await knex.schema
    .createTable("roles", (roles) => {
      roles.increments("role_id");
      roles.string("role_name", 200).notNullable().defaultTo("client");
    })
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).unique().notNullable();
      users.string("password", 200).notNullable();
      users
        .integer("role_id")
        .unsigned()
        .notNullable()
        .references("role_id")
        .inTable("roles")
        .onUpdate("cascade")
        .onDelete("cascade");
    })
    .createTable("classes", (classes) => {
      classes.increments("class_id");
      classes.string("name", 200).notNullable();
      classes.string("type", 200).notNullable();
      classes.string("start_time").notNullable();
      classes.string("duration").notNullable();
      classes.integer("intensity_level");
      classes.string("location").notNullable();
      classes.integer("registered_attendees");
      classes.integer("max_size");
    })
    .createTable("user_classes", (user_classes) => {
      user_classes.increments("user_class_id");
      user_classes
        .integer("class_id")
        .unsigned()
        .notNullable()
        .references("class_id")
        .inTable("classes")
        .onUpdate("cascade")
        .onDelete("cascade");
      user_classes
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("cascade")
        .onDelete("cascade");
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists("user_classes")
    .dropTableIfExists("classes")
    .dropTableIfExists("users")
    .dropTableIfExists("roles");
};
