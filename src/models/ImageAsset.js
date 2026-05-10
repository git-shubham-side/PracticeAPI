const createCategoryModel = require("./categoryModelFactory");

module.exports = createCategoryModel("ImageAsset", "images", {
  avatarUrl: { type: String, required: true, trim: true },
  galleryUrl: { type: String, required: true, trim: true },
  portraitUrl: { type: String, required: true, trim: true },
  width: { type: Number, required: true, min: 1 },
  height: { type: Number, required: true, min: 1 },
  altText: { type: String, required: true, trim: true },
  collectionName: { type: String, required: true, trim: true },
  dominantColor: { type: String, required: true, trim: true },
});
