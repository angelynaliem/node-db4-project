exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        { recipe_id: 1, ingredient_id: 4, quantity: 1 },
        { recipe_id: 1, ingredient_id: 3, quantity: 0.5 },
        { recipe_id: 1, ingredient_id: 2, quantity: 0.25 },
      ]);
    });
};
