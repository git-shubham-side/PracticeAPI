const mongoose = require("mongoose");

function createCategoryModel(modelName, collectionName, fields) {
  const schema = new mongoose.Schema(
    {
      entryId: {
        type: String,
        required: true,
        unique: true,
        index: true,
      },
      ...fields,
    },
    {
      collection: collectionName,
      timestamps: true,
    },
  );

  return mongoose.models[modelName] || mongoose.model(modelName, schema);
}

module.exports = createCategoryModel;
