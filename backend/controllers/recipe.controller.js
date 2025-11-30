const Recipe = require("../models/Recipe.model.js"); // CommonJS import

const getAllRecipes = async (req, res) => {
  try {
    const { category, time, search } = req.query;

    let filters = {};

    // ----- Category Filter -----
    if (category) {
      filters.category = category;
    }

    // ----- Time Filter -----
    if (time === "under30") {
      filters.cookingTime = { $lte: 30 };
    } else if (time === "30-60") {
      filters.cookingTime = { $gte: 30, $lte: 60 };
    } else if (time === "above60") {
      filters.cookingTime = { $gte: 60 };
    }

    // ----- Search Filter -----
    if (search) {
      filters.$text = { $search: search };
    }

    // ----- Validation: Ensure filters are correct -----
    // Optional: You can validate category/time values here
    const allowedCategories = ["Breakfast","Vegan","Dessert","Quick Meals","Dinner","Snacks","Drinks"];
    if (category && !allowedCategories.includes(category)) {
      return res.status(400).json({
        success: false,
        message: "Invalid category selected",
      });
    }

    const allowedTimeFilters = ["under30", "30-60", "above60"];
    if (time && !allowedTimeFilters.includes(time)) {
      return res.status(400).json({
        success: false,
        message: "Invalid time filter selected",
      });
    }

    // ----- Fetch Recipes from DB -----
    const recipes = await Recipe.find(filters).sort({ createdAt: -1 });

    // ----- Check if any recipes found -----
    if (!recipes || recipes.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No recipes found matching your criteria",
        total: 0,
        recipes: [],
      });
    }

    // ----- Success Response -----
    res.status(200).json({
      success: true,
      message: "Recipes fetched successfully",
      total: recipes.length,
      recipes,
    });

  } catch (err) {
    // ----- Error Handling -----
    res.status(500).json({
      success: false,
      message: "Server error while fetching recipes",
      error: err.message,
    });
  }
};

module.exports = { getAllRecipes };
