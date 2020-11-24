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
    const list = await db("recipes_ingredients_quantity")
      .join(
        "ingredients",
        "quantities",
        "recipes",
        "recipes_ingredients_quantity"
      )
      .where({ recipe_id: id })
      .select(
        "quantities.quantity_description",
        "ingredients.ingredient_name",
        "recipes.recipe_name"
      );
    return list;
  } catch (err) {
    throw err;
  }
}

async function getInstructions(id) {
  try {
    const instructions = await db("instructions")
      .join("recipes")
      .where({ recipe_id: id })
      .select("instructions.instruction_description", "recipes.recipe_name");

    return instructions;
  } catch (err) {
    throw err;
  }
}
