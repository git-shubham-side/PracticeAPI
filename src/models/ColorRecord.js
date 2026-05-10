const createCategoryModel = require("./categoryModelFactory");

module.exports = createCategoryModel("ColorRecord", "colors", {
  name: { type: String, required: true, trim: true },
  hexCode: { type: String, required: true, trim: true },
  rgb: { type: String, required: true, trim: true },
  cmyk: { type: String, required: true, trim: true },
  hsl: { type: String, required: true, trim: true },
  cssFunction: { type: String, required: true, trim: true },
  space: { type: String, required: true, trim: true },
  accessibleTextColor: { type: String, required: true, trim: true },
});
