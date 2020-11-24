const express = require("express");
const helmet = require("helmet");

const RecipesRouter = require("./recipes/recipes-router.js");
const IngredientsRouter = require("./ingredients/ingredients-router.js");

const server = express();

server.use(express.json());
server.use("/api/recipes", RecipesRouter);
// server.use("/api/ingredients", IngredientsRouter);

module.exports = server;
