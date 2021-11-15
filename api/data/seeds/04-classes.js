exports.seed = async function (knex) {
  await knex("classes").insert([
    {
      name: "Class 1",
      type: "rowing",
      start_time: "1:00PM",
      duration: "1hr",
      intensity_level: "8",
      location: "Park",
      registered_attendees: "27",
      max_size: "30",
    },
    {
      name: "Class 2",
      type: "aerobics",
      start_time: "2:00PM",
      duration: "30min",
      intensity_level: "6",
      location: "Gym",
      registered_attendees: "199",
      max_size: "200",
    },
    {
      name: "Class 3",
      type: "yoga",
      start_time: "3:00PM",
      duration: "1hr",
      intensity_level: "2",
      location: "Park",
      registered_attendees: "5",
      max_size: "10",
    },
    {
      name: "Class 4",
      type: "swim",
      start_time: "4:00PM",
      duration: "30min",
      intensity_level: "9",
      location: "Gym",
      registered_attendees: "1",
      max_size: "5",
    },
  ]);
};
