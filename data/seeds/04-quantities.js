exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("quantities")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("quantities").insert([
        { quantity_description: "1" },
        { quantity_description: "2" },
        { quantity_description: "0.5" },
      ]);
    });
};
