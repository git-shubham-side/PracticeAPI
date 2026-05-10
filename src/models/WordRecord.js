const createCategoryModel = require("./categoryModelFactory");

module.exports = createCategoryModel("WordRecord", "words", {
  adjective: { type: String, required: true, trim: true },
  adverb: { type: String, required: true, trim: true },
  conjunction: { type: String, required: true, trim: true },
  interjection: { type: String, required: true, trim: true },
  noun: { type: String, required: true, trim: true },
  preposition: { type: String, required: true, trim: true },
  verb: { type: String, required: true, trim: true },
  sample: { type: String, required: true, trim: true },
  phrase: { type: String, required: true, trim: true },
});
