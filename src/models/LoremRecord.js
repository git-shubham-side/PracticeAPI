const createCategoryModel = require("./categoryModelFactory");

module.exports = createCategoryModel("LoremRecord", "lorem", {
  word: { type: String, required: true, trim: true },
  phrase: { type: String, required: true, trim: true },
  sentence: { type: String, required: true, trim: true },
  paragraph: { type: String, required: true, trim: true },
  slug: { type: String, required: true, trim: true },
  excerpt: { type: String, required: true, trim: true },
  lines: { type: String, required: true, trim: true },
});
