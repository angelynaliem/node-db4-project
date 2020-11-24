const express = require("express");

const RecipesModel = require("./recipes-model.js");

const RecipesRouter = express.Router();

RecipesRouter.get("/", (req, res) => {
  RecipesModel.getRecipes()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

RecipesRouter.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params;

  RecipesModel.getShoppingList(id)
    .then((list) => {
      if (list) {
        res.json(list);
      } else {
        res.status(404).json({ message: "Could not find list with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get list" });
    });
});

RecipesRouter.get("/:id/instructions", (req, res) => {
  const { id } = req.params;

  RecipesModel.getInstructions(id)
    .then((instructions) => {
      if (instructions.length) {
        res.json(instructions);
      } else {
        res
          .status(404)
          .json({ message: "Could not find instructions for given recipe" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to get instructions for given recipe" });
    });
});

module.exports = RecipesRouter;
