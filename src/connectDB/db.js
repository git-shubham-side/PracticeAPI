const mongoose = require("mongoose");
module.exports = connectDB = async function (url) {
  mongoose.connect(url);
};
