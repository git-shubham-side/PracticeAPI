const createCategoryModel = require("./categoryModelFactory");

module.exports = createCategoryModel("DateEntry", "dates", {
  label: { type: String, required: true, trim: true },
  calendar: { type: String, required: true, trim: true },
  value: { type: Date, required: true },
  weekday: { type: String, required: true, trim: true },
  month: { type: String, required: true, trim: true },
  quarter: { type: Number, required: true, min: 1, max: 4 },
  timeZone: { type: String, required: true, trim: true },
  unixTimestamp: { type: Number, required: true },
  isWeekend: { type: Boolean, required: true },
});
