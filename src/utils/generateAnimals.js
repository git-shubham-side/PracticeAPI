const { Faker, en_IN, en } = require("@faker-js/faker");
const indianFaker = new Faker({ locale: [en_IN, en] });
const connectDB = require("../connectDB/db");
const generateData = require("./generateData");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
// const Animal = require("../models/Animals");

function generateAnimals(animalCount) {
  //Species
  const indianDogs = [
    "Mudhol Hound",
    "Indian Spitz",
    "Rajapalayam",
    "Kombai",
    "Kanni",
    "Chippiparai",
  ];
  const indianCats = [
    // Domestic
    "Indian Billi",
    "Bombay Cat",

    // Wild
    "Bengal Tiger",
    "Asiatic Lion",
    "Indian Leopard",
    "Snow Leopard",
    "Clouded Leopard",
    "Caracal",
    "Indian Cheetah",
    "Jungle Cat",
    "Fishing Cat",
    "Rusty Spotted Cat",
    "Desert Cat",
    "Pallas Cat",
  ];

  const indianBirds = [
    // Common / Urban
    "House Sparrow",
    "Common Myna",
    "Indian Crow",
    "Rock Pigeon",
    "Rose Ringed Parakeet",
    "Common Koel",
    "Asian Koel",
    "Bulbul",

    // Water / Wetland
    "Flamingo",
    "Painted Stork",
    "Sarus Crane",
    "Indian Cormorant",
    "Little Egret",
    "Great Egret",
    "Purple Heron",
    "Kingfisher",
    "Indian Skimmer",
    "Bar Headed Goose",

    // Forest
    "Peacock",
    "Indian Hornbill",
    "Malabar Trogon",
    "Indian Pitta",
    "Crested Serpent Eagle",
    "Shikra",
    "Changeable Hawk Eagle",

    // Raptors
    "Brahminy Kite",
    "Indian Vulture",
    "White Backed Vulture",
    "Short Toed Eagle",
    "Laggar Falcon",
    "Indian Eagle Owl",

    // Endemic / Rare
    "Great Indian Bustard",
    "Nilgiri Flycatcher",
    "Malabar Whistling Thrush",
    "Andaman Woodpecker",
    "Narcondam Hornbill",
  ];
  const indianAnimals = [
    // Farm / Domestic
    "Cow",
    "Buffalo",
    "Goat",
    "Sheep",
    "Pig",
    "Donkey",
    "Horse",
    "Camel",
    "Ox",

    // Pets
    "Dog",
    "Cat",
    "Rabbit",
    "Parrot",
    "Goldfish",
    "Turtle",

    // Wild / Forest
    "Tiger",
    "Lion",
    "Leopard",
    "Elephant",
    "Rhinoceros",
    "Sloth Bear",
    "Indian Bison (Gaur)",
    "Nilgai",
    "Blackbuck",
    "Chinkara",
    "Sambar Deer",
    "Spotted Deer (Chital)",
    "Barking Deer",
    "Wild Boar",
    "Indian Wolf",
    "Striped Hyena",
    "Golden Jackal",
    "Indian Fox",
    "Mongoose",

    // Primates
    "Monkey (Rhesus Macaque)",
    "Langur",
    "Bonnet Macaque",

    // Birds
    "Peacock",
    "Parrot",
    "Myna",
    "Koel",
    "Sparrow",
    "Crow",
    "Pigeon",
    "Vulture",
    "Eagle",
    "Owl",
    "Kingfisher",
    "Flamingo",
    "Crane",
    "Hornbill",

    // Reptiles
    "Cobra",
    "Python",
    "Krait",
    "Monitor Lizard",
    "Chameleon",
    "Gharial",
    "Mugger Crocodile",
    "Indian Star Tortoise",

    // Aquatic
    "Rohu Fish",
    "Catla Fish",
    "Hilsa",
    "Mahseer",
    "Gangetic Dolphin",
    "Olive Ridley Turtle",
    "Indian Frog",

    // Insects (common)
    "Butterfly",
    "Honeybee",
    "Firefly",
    "Dragonfly",
  ];

  const getRandomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const generateAnimalData = (count) => {
    return Array.from({ length: count }, () => ({
      id: indianFaker.string.uuid(),
      owner: indianFaker.person.fullName(),
      city: indianFaker.location.city(),
      breed: getRandomFrom(indianDogs),
      type: getRandomFrom(indianAnimals),
      bird: getRandomFrom(indianBirds),
      color: indianFaker.color.human(),
      age: indianFaker.number.int({ min: 1, max: 20 }),
      adopted: indianFaker.datatype.boolean(),
    }));
  };

  return generateAnimalData(animalCount);
}

module.exports = generateAnimals;
