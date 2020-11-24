exports.up = function (knex) {
  return knex.schema
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("ingredient_name", 255).notNullable().unique();
    })

    .createTable("instructions", (tbl) => {
      tbl.increments();
      tbl.string("instruction_description", 1000).notNullable();
    })

    .createTable("quantities", (tbl) => {
      tbl.increments();
      tbl.float("quantity_description").notNullable();
    })

    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipe_name", 255).notNullable().unique();

      tbl
        .integer("instruction_id")
        .unsigned()
        .notNullable()
        .references("instructions.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("recipes_ingredients_quantity", (tbl) => {
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

      tbl
        .integer("quantity_id")
        .unsigned()
        .notNullable()
        .references("quantities.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl.primary(["recipe_id", "ingredient_id", "quantity_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes_ingredients_quantity")
    .dropTableIfExists("recipes")
    .dropTableIfExists("quantities")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients");
};
