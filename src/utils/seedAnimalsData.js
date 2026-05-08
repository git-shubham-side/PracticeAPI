const connectDB = require("../connectDB/db");
const Animal = require("../models/Animals");
const mongoose = require("mongoose");
// const Animal = require("../models/Animals");

// -------------  Function to insert data into Models------------
async function seedAnimalData(data) {
  await connectDB();
  //   await Animal.deleteMany();
  const res = await Animal.insertMany(data);
  console.log("Data inserted Successfully");
  await mongoose.disconnect();
}

module.exports = seedAnimalData;
