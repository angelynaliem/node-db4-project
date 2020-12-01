const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

async function getRecipes() {
  try {
    return await db("recipes");
  } catch (err) {
    throw err;
  }
}

async function getShoppingList(id) {
  try {
    const list = await db("recipes_ingredients")
      .join(
        "ingredients",
        "recipes_ingredients.ingredient_id",
        "ingredients.id"
      )
      .join("recipes", "recipes_ingredients.recipe_id", "recipes.id")
      .where({ recipe_id: id })
      .select(
        "ingredients.ingredient_name",
        "recipes.recipe_name",
        "recipes_ingredients.quantity"
      );
    return list;
  } catch (err) {
    throw err;
  }
}

async function getInstructions(id) {
  try {
    const instructions = await db("instructions")
      .join("recipes", "recipes.id", "instructions.recipe_id")
      .where({ recipe_id: id })
      .select("instructions.instruction_description", "recipes.recipe_name");

    return instructions;
  } catch (err) {
    throw err;
  }
}
