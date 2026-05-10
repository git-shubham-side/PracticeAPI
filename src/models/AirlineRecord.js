const createCategoryModel = require("./categoryModelFactory");

module.exports = createCategoryModel("AirlineRecord", "airlines", {
  airlineName: { type: String, required: true, trim: true },
  airlineCode: { type: String, required: true, trim: true },
  airportName: { type: String, required: true, trim: true },
  airportCode: { type: String, required: true, trim: true },
  aircraftName: { type: String, required: true, trim: true },
  aircraftTypeCode: { type: String, required: true, trim: true },
  flightNumber: { type: String, required: true, trim: true },
  seat: { type: String, required: true, trim: true },
  terminal: { type: String, required: true, trim: true },
  gate: { type: String, required: true, trim: true },
});
