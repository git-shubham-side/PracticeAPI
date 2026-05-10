// unused removed later: manual seed script is not part of the current app flow
const Location = require("../models/Location");
const genLocation = require("./genLocation");
const DB = require("../connectDB/db");
const mongoose = require("mongoose");
// DB(); // unused removed later

async function locationSeed() {
  const locationData = genLocation(1);
  let res = await Location.create(locationData);
  console.log(res);
  console.log("Data Inserted Successfully!");
  await mongoose.disconnect();
}
// locationSeed();
