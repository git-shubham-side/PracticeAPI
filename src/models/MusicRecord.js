const createCategoryModel = require("./categoryModelFactory");

module.exports = createCategoryModel("MusicRecord", "music", {
  artist: { type: String, required: true, trim: true },
  album: { type: String, required: true, trim: true },
  songName: { type: String, required: true, trim: true },
  genre: { type: String, required: true, trim: true },
  durationSeconds: { type: Number, required: true, min: 30 },
  label: { type: String, required: true, trim: true },
  releaseYear: { type: Number, required: true, min: 1900 },
});
