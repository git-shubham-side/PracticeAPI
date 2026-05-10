const createCategoryModel = require("./categoryModelFactory");

module.exports = createCategoryModel("PhoneRecord", "phones", {
  phoneNumber: { type: String, required: true, trim: true },
  imei: { type: String, required: true, trim: true },
  carrier: { type: String, required: true, trim: true },
  countryCode: { type: String, required: true, trim: true },
  modelName: { type: String, required: true, trim: true },
  simType: { type: String, required: true, trim: true },
  supports5g: { type: Boolean, required: true },
});
