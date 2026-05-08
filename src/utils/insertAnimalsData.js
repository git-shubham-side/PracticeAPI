const connectDB = require("../connectDB/db");
//Function to Generate  Data into animals
const generateAnimals = require("../utils/generateAnimals");
// This funciton takes positive number to generate number of animals
// eg. animals(count)

//function to seed data into Animal model
const seedAnimalsData = require("../utils/seedAnimalsData");

// Use only while inserting the data-----
// const animals = generateAnimals(100);
// seedAnimalsData(animals);
