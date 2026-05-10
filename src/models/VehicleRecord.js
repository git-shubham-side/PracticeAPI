const createCategoryModel = require("./categoryModelFactory");

module.exports = createCategoryModel("VehicleRecord", "vehicles", {
  manufacturer: { type: String, required: true, trim: true },
  vehicleName: { type: String, required: true, trim: true },
  model: { type: String, required: true, trim: true },
  type: { type: String, required: true, trim: true },
  fuel: { type: String, required: true, trim: true },
  vin: { type: String, required: true, trim: true },
  color: { type: String, required: true, trim: true },
  registrationNumber: { type: String, required: true, trim: true },
  bicycle: { type: String, required: true, trim: true },
});
