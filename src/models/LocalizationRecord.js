const createCategoryModel = require("./categoryModelFactory");

module.exports = createCategoryModel("LocalizationRecord", "localizations", {
  localeCode: { type: String, required: true, trim: true },
  language: { type: String, required: true, trim: true },
  country: { type: String, required: true, trim: true },
  countryCode: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  direction: { type: String, required: true, trim: true },
  timeZone: { type: String, required: true, trim: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});
