const createCategoryModel = require("./categoryModelFactory");

module.exports = createCategoryModel("Commerce", "commerce", {
  sku: { type: String, required: true, trim: true },
  department: { type: String, required: true, trim: true },
  productName: { type: String, required: true, trim: true },
  product: { type: String, required: true, trim: true },
  material: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  currencyCode: { type: String, required: true, trim: true },
  isbn: { type: String, required: true, trim: true },
  upc: { type: String, required: true, trim: true },
  inStock: { type: Boolean, required: true },
});
