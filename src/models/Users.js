const mongoose = require("mongoose");

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
}, { timestamps: true });

module.exports = mongoose.models.Users || mongoose.model("Users", userSchema);
