const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

// const generateData = require("../utils/generateData"); // unused removed later
const connectDB = require("../connectDB/db");
//DB Connection
connectDB(process.env.MONGODB_URI);

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
  },
  avatar: {
    type: String,
    default: null,
    maxlength: 512,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Min 8 characters"],
    select: false, // hidden from queries by default
  },
  birthdate: {
    type: Date,
    default: null,
  },
});

const Users = mongoose.model("Users", userSchema);

//Data Seeding
// const users = generateData();

// async function seedData(data) {
//   const result = await Users.create(data);
//   console.log(result);
// }

// //Calling Seeding Function
// seedData(users)
//   .then(() => {
//     console.log("Data Inserted Ssuccessfully");
//   })
//   .catch((err) => {
//     console.log("Problem while inserting ---------->", err.message);
//   });

module.exports = Users;
