exports.up = function (knex) {
  return knex.schema
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("ingredient_name", 255).notNullable().unique();
    })

    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipe_name", 255).notNullable().unique();
    })

    .createTable("instructions", (tbl) => {
      tbl.increments();
      tbl.string("instruction_description", 1000).notNullable();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("recipes_ingredients", (tbl) => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredients.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl.float("quantity").notNullable();

      // tbl.primary(["recipe_id", "ingredient_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients");
};
