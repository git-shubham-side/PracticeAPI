const createCategoryModel = require("./categoryModelFactory");

module.exports = createCategoryModel("FoodRecord", "foods", {
  dish: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  ingredient: { type: String, required: true, trim: true },
  spice: { type: String, required: true, trim: true },
  fruit: { type: String, required: true, trim: true },
  vegetable: { type: String, required: true, trim: true },
  meat: { type: String, required: true, trim: true },
  cuisine: { type: String, required: true, trim: true },
  calories: { type: Number, required: true, min: 0 },
});
