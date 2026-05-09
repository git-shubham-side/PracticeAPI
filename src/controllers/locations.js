const mongoose = require("mongoose");
const Location = require("../models/Location");
const connectDB = require("../connectDB/db");
connectDB();

module.exports = async (req, res) => {
  const count = Number(req.query.count || 10);
  const result = await Location.find({}).limit(count);
  res.json(result);
};
