const createCategoryModel = require("./categoryModelFactory");

module.exports = createCategoryModel("CompanyRecord", "companies", {
  name: { type: String, required: true, trim: true },
  catchPhrase: { type: String, required: true, trim: true },
  buzzPhrase: { type: String, required: true, trim: true },
  industry: { type: String, required: true, trim: true },
  headquarters: { type: String, required: true, trim: true },
  website: { type: String, required: true, trim: true },
  foundedYear: { type: Number, required: true, min: 1900 },
});
