exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Sweet baked salmon", instruction_id: 1 },
        { recipe_name: "Sauteed spinach", instruction_id: 2 },
      ]);
    });
};
