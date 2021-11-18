exports.seed = async function (knex) {
  await knex("classes").insert([
    {
      name: "Class 1",
      start_time: "1:00PM",
      duration: "1hr",
      intensity_level: "8",
      location: "Park",
      registered_attendees: "27",
      max_size: "30",
      class_type_id: 1,
    },
    {
      name: "Class 2",
      start_time: "2:00PM",
      duration: "30min",
      intensity_level: "6",
      location: "Gym",
      registered_attendees: "199",
      max_size: "200",
      class_type_id: 2,
    },
    {
      name: "Class 3",
      start_time: "3:00PM",
      duration: "1hr",
      intensity_level: "2",
      location: "Park",
      registered_attendees: "5",
      max_size: "10",
      class_type_id: 1,
    },
    {
      name: "Class 4",
      start_time: "4:00PM",
      duration: "30min",
      intensity_level: "9",
      location: "Gym",
      registered_attendees: "1",
      max_size: "5",
      class_type_id: 2,
    },
  ]);
};
