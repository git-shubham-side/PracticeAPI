const createCategoryModel = require("./categoryModelFactory");

module.exports = createCategoryModel("BookRecord", "books", {
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  genre: { type: String, required: true, trim: true },
  format: { type: String, required: true, trim: true },
  publisher: { type: String, required: true, trim: true },
  series: { type: String, required: true, trim: true },
  isbn: { type: String, required: true, trim: true },
  releaseDate: { type: Date, required: true },
  pages: { type: Number, required: true, min: 1 },
});
