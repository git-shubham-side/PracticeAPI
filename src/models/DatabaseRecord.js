const createCategoryModel = require("./categoryModelFactory");

module.exports = createCategoryModel("DatabaseRecord", "databases", {
  databaseName: { type: String, required: true, trim: true },
  engine: { type: String, required: true, trim: true },
  columnName: { type: String, required: true, trim: true },
  columnType: { type: String, required: true, trim: true },
  collation: { type: String, required: true, trim: true },
  objectId: { type: String, required: true, trim: true },
  clusterName: { type: String, required: true, trim: true },
  replicated: { type: Boolean, required: true },
});
