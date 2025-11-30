const express = require("express");
const { getAllRecipes } = require("../controllers/recipe.controller.js");
const router = express.Router();

// GET all recipes
router.get("/", getAllRecipes);

module.exports = router;
