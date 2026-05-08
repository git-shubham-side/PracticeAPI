const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const mongoose = require("mongoose");
module.exports = connectDB = async function () {
  mongoose.connect(process.env.MONGODB_URI);
};
connectDB().catch((err) => {
  console.log(err.message);
});
