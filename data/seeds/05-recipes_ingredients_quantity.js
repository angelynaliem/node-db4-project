exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients_quantity")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes_ingredients_quantity").insert([
        { recipe_id: 1, ingredient_id: 4, quantity_id: 1 },
        { recipe_id: 1, ingredient_id: 3, quantity_id: 2 },
        { recipe_id: 1, ingredient_id: 2, quantity_id: 2 },
      ]);
    });
};
