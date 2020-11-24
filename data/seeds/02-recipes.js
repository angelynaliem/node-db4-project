exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Sweet baked salmon" },
        { recipe_name: "Sauteed spinach" },
      ]);
    });
};
