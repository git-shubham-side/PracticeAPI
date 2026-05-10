const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    owner: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    breed: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    bird: {
      type: String,
      trim: true,
      default: null,
    },
    color: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 1,
      max: 20,
    },

    adopted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt auto
  },
);

const Animal = mongoose.models.Animal || mongoose.model("Animal", animalSchema);

module.exports = Animal;
