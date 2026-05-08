const mongoose = require("mongoose");
const Animal = require("../models/Animals");
const connectDB = require("../connectDB/db");
connectDB();

module.exports = async (req, res) => {
  const count = Number(req.query.count || 10);
  const result = await Animal.find({}).limit(count);
  res.json(result);
};
