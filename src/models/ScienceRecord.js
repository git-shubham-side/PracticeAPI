const createCategoryModel = require("./categoryModelFactory");

module.exports = createCategoryModel("ScienceRecord", "science", {
  elementName: { type: String, required: true, trim: true },
  symbol: { type: String, required: true, trim: true },
  atomicNumber: { type: Number, required: true, min: 1 },
  unitName: { type: String, required: true, trim: true },
  unitSymbol: { type: String, required: true, trim: true },
  branch: { type: String, required: true, trim: true },
  experimentName: { type: String, required: true, trim: true },
  labVerified: { type: Boolean, required: true },
});
