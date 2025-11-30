const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  image: { type: String, default: "" },
  category: {
    type: String,
    required: true,
    enum: ["Breakfast","Vegan","Dessert","Quick Meals","Dinner","Snacks","Drinks"],
  },
  cookingTime: { type: Number, required: true },
  ingredients: [{ type: String }],
}, { timestamps: true });

// Text index  for //search fast
recipeSchema.index({ title: "text", description: "text", ingredients: "text" });

// Model
const Recipe = mongoose.model("Recipe", recipeSchema);

// Export
module.exports = Recipe;
