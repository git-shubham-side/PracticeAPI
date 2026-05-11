const { faker } = require("@faker-js/faker/locale/en_IN");

const Users = require("../models/Users");
const Animal = require("../models/Animals");
const Location = require("../models/Location");
const Finance = require("../models/Finance");
const DateEntry = require("../models/DateEntry");
const Commerce = require("../models/Commerce");
const LocalizationRecord = require("../models/LocalizationRecord");
const AirlineRecord = require("../models/AirlineRecord");
const BookRecord = require("../models/BookRecord");
const ColorRecord = require("../models/ColorRecord");
const CompanyRecord = require("../models/CompanyRecord");
const DatabaseRecord = require("../models/DatabaseRecord");
const FoodRecord = require("../models/FoodRecord");
const ImageAsset = require("../models/ImageAsset");
const LoremRecord = require("../models/LoremRecord");
const MusicRecord = require("../models/MusicRecord");
const PhoneRecord = require("../models/PhoneRecord");
const ScienceRecord = require("../models/ScienceRecord");
const VehicleRecord = require("../models/VehicleRecord");
const WordRecord = require("../models/WordRecord");

const generateUsers = require("../utils/generateData");
const generateAnimals = require("../utils/generateAnimals");
const generateLocations = require("../utils/genLocation");
const generateFinanceData = require("../utils/DataGeneration/Finance/financeGeneration");

const localeCodes = [
  "en-IN",
  "hi-IN",
  "bn-IN",
  "gu-IN",
  "kn-IN",
  "mr-IN",
  "ta-IN",
  "te-IN",
];

const calendarTypes = ["Gregorian", "Fiscal", "Academic", "Event"];
const terminals = ["T1", "T2", "T3", "Domestic", "International"];
const industries = [
  "FinTech",
  "HealthTech",
  "Retail",
  "SaaS",
  "EdTech",
  "Logistics",
  "Media",
];
const cuisines = [
  "Indian",
  "Italian",
  "Thai",
  "Mediterranean",
  "Mexican",
  "Japanese",
];
const imageCollections = [
  "avatars",
  "campaigns",
  "products",
  "portraits",
  "thumbnails",
];
const carriers = ["Jio", "Airtel", "Vi", "BSNL"];
const simTypes = ["Nano SIM", "eSIM", "Dual SIM"];
const scienceBranches = [
  "Physics",
  "Chemistry",
  "Biology",
  "Astronomy",
  "Robotics",
  "Materials Science",
];

const formatTuple = (value) =>
  Array.isArray(value) ? value.join(", ") : String(value);

const parseCount = (value, fallback = 10) => {
  const count = Number.parseInt(value, 10);

  if (!Number.isFinite(count) || count <= 0) {
    return fallback;
  }

  return Math.min(count, 100);
};

const createDateRecord = () => {
  const value = faker.date.between({ from: "2023-01-01", to: "2027-12-31" });
  const monthNumber = value.getMonth() + 1;

  return {
    entryId: faker.string.uuid(),
    label: faker.lorem.words(3),
    calendar: faker.helpers.arrayElement(calendarTypes),
    value,
    weekday: faker.date.weekday(),
    month: faker.date.month(),
    quarter: Math.ceil(monthNumber / 3),
    timeZone: faker.date.timeZone(),
    unixTimestamp: Math.floor(value.getTime() / 1000),
    isWeekend: value.getDay() === 0 || value.getDay() === 6,
  };
};

const createCommerceRecord = () => ({
  entryId: faker.string.uuid(),
  sku: `SKU-${faker.string.alphanumeric(10).toUpperCase()}`,
  department: faker.commerce.department(),
  productName: faker.commerce.productName(),
  product: faker.commerce.product(),
  material: faker.commerce.productMaterial(),
  description: faker.commerce.productDescription(),
  price: Number.parseFloat(faker.commerce.price({ min: 149, max: 9999, dec: 2 })),
  currencyCode: faker.finance.currencyCode(),
  isbn: faker.commerce.isbn(),
  upc: faker.commerce.upc(),
  inStock: faker.datatype.boolean(),
});

const createLocalizationRecord = () => ({
  entryId: faker.string.uuid(),
  localeCode: faker.helpers.arrayElement(localeCodes),
  language: faker.location.language().name,
  country: faker.location.country(),
  countryCode: faker.location.countryCode(),
  state: faker.location.state(),
  city: faker.location.city(),
  direction: faker.location.direction(),
  timeZone: faker.location.timeZone(),
  latitude: Number(faker.location.latitude()),
  longitude: Number(faker.location.longitude()),
});

const createAirlineRecord = () => {
  const airline = faker.airline.airline();
  const airport = faker.airline.airport();
  const airplane = faker.airline.airplane();

  return {
    entryId: faker.string.uuid(),
    airlineName: airline.name,
    airlineCode: airline.iataCode,
    airportName: airport.name,
    airportCode: airport.iataCode,
    aircraftName: airplane.name,
    aircraftTypeCode: airplane.iataTypeCode,
    flightNumber: faker.airline.flightNumber(),
    seat: faker.airline.seat(),
    terminal: faker.helpers.arrayElement(terminals),
    gate: `${faker.string.alpha({ length: 1, casing: "upper" })}${faker.number.int({ min: 1, max: 30 })}`,
  };
};

const createBookRecord = () => ({
  entryId: faker.string.uuid(),
  title: faker.book.title(),
  author: faker.book.author(),
  genre: faker.book.genre(),
  format: faker.book.format(),
  publisher: faker.book.publisher(),
  series: faker.book.series(),
  isbn: faker.commerce.isbn(),
  releaseDate: faker.date.past({ years: 15 }),
  pages: faker.number.int({ min: 120, max: 960 }),
});

const createColorRecord = () => ({
  entryId: faker.string.uuid(),
  name: faker.color.human(),
  hexCode: faker.color.rgb(),
  rgb: faker.color.rgb({ format: "css" }),
  cmyk: formatTuple(faker.color.cmyk()),
  hsl: formatTuple(faker.color.hsl()),
  cssFunction: faker.color.cssSupportedFunction(),
  space: faker.color.space(),
  accessibleTextColor: faker.helpers.arrayElement(["dark", "light"]),
});

const createCompanyRecord = () => ({
  entryId: faker.string.uuid(),
  name: faker.company.name(),
  catchPhrase: faker.company.catchPhrase(),
  buzzPhrase: faker.company.buzzPhrase(),
  industry: faker.helpers.arrayElement(industries),
  headquarters: `${faker.location.city()}, ${faker.location.country()}`,
  website: `https://${faker.internet.domainName()}`,
  foundedYear: faker.number.int({ min: 1950, max: 2024 }),
});

const createDatabaseRecord = () => ({
  entryId: faker.string.uuid(),
  databaseName: `${faker.company.name().replace(/\s+/g, "_").toLowerCase()}_${faker.word.noun()}`,
  engine: faker.database.engine(),
  columnName: faker.database.column(),
  columnType: faker.database.type(),
  collation: faker.database.collation(),
  objectId: faker.database.mongodbObjectId(),
  clusterName: `cluster-${faker.string.alphanumeric(6).toLowerCase()}`,
  replicated: faker.datatype.boolean(),
});

const createFoodRecord = () => ({
  entryId: faker.string.uuid(),
  dish: faker.food.dish(),
  description: faker.food.description(),
  ingredient: faker.food.ingredient(),
  spice: faker.food.spice(),
  fruit: faker.food.fruit(),
  vegetable: faker.food.vegetable(),
  meat: faker.food.meat(),
  cuisine: faker.helpers.arrayElement(cuisines),
  calories: faker.number.int({ min: 120, max: 980 }),
});

const createImageRecord = () => {
  const width = faker.number.int({ min: 640, max: 3840 });
  const height = faker.number.int({ min: 480, max: 2160 });

  return {
    entryId: faker.string.uuid(),
    avatarUrl: faker.image.avatar(),
    galleryUrl: faker.image.urlPicsumPhotos({ width, height }),
    portraitUrl: faker.image.personPortrait(),
    width,
    height,
    altText: faker.lorem.sentence(),
    collectionName: faker.helpers.arrayElement(imageCollections),
    dominantColor: faker.color.human(),
  };
};

const createLoremRecord = () => ({
  entryId: faker.string.uuid(),
  word: faker.lorem.word(),
  phrase: faker.lorem.words(4),
  sentence: faker.lorem.sentence(),
  paragraph: faker.lorem.paragraph(),
  slug: faker.lorem.slug(),
  excerpt: faker.lorem.sentences(2),
  lines: faker.lorem.lines(2),
});

const createMusicRecord = () => ({
  entryId: faker.string.uuid(),
  artist: faker.music.artist(),
  album: faker.music.album(),
  songName: faker.music.songName(),
  genre: faker.music.genre(),
  durationSeconds: faker.number.int({ min: 90, max: 420 }),
  label: `${faker.company.name()} Records`,
  releaseYear: faker.number.int({ min: 1990, max: 2025 }),
});

const createPhoneRecord = () => ({
  entryId: faker.string.uuid(),
  phoneNumber: faker.phone.number(),
  imei: faker.phone.imei(),
  carrier: faker.helpers.arrayElement(carriers),
  countryCode: "+91",
  modelName: `${faker.vehicle.manufacturer()} ${faker.word.noun()}`,
  simType: faker.helpers.arrayElement(simTypes),
  supports5g: faker.datatype.boolean(),
});

const createScienceRecord = () => {
  const element = faker.science.chemicalElement();
  const unit = faker.science.unit();

  return {
    entryId: faker.string.uuid(),
    elementName: element.name,
    symbol: element.symbol,
    atomicNumber: element.atomicNumber,
    unitName: unit.name,
    unitSymbol: unit.symbol,
    branch: faker.helpers.arrayElement(scienceBranches),
    experimentName: `${faker.word.adjective()} ${faker.word.noun()} study`,
    labVerified: faker.datatype.boolean(),
  };
};

const createVehicleRecord = () => ({
  entryId: faker.string.uuid(),
  manufacturer: faker.vehicle.manufacturer(),
  vehicleName: faker.vehicle.vehicle(),
  model: faker.vehicle.model(),
  type: faker.vehicle.type(),
  fuel: faker.vehicle.fuel(),
  vin: faker.vehicle.vin(),
  color: faker.vehicle.color(),
  registrationNumber: faker.vehicle.vrm(),
  bicycle: faker.vehicle.bicycle(),
});

const createWordRecord = () => {
  const adjective = faker.word.adjective();
  const noun = faker.word.noun();
  const verb = faker.word.verb();

  return {
    entryId: faker.string.uuid(),
    adjective,
    adverb: faker.word.adverb(),
    conjunction: faker.word.conjunction(),
    interjection: faker.word.interjection(),
    noun,
    preposition: faker.word.preposition(),
    verb,
    sample: faker.word.sample(),
    phrase: `${adjective} ${noun} ${verb}`,
  };
};

const createBatch = (builder, count) =>
  Array.from({ length: count }, () => builder());

const datasets = {
  users: {
    label: "Users",
    model: Users,
    seedCount: 100,
    generate: (count) => generateUsers(count),
    aliases: [],
  },
  animals: {
    label: "Animals",
    model: Animal,
    seedCount: 100,
    generate: (count) => generateAnimals(count),
    aliases: [],
  },
  locations: {
    label: "Locations",
    model: Location,
    seedCount: 100,
    generate: (count) => generateLocations(count),
    aliases: [],
  },
  finance: {
    label: "Finance",
    model: Finance,
    seedCount: 100,
    generate: (count) => generateFinanceData(count),
    aliases: [],
  },
  dates: {
    label: "Date",
    model: DateEntry,
    seedCount: 80,
    generate: (count) => createBatch(createDateRecord, count),
    aliases: ["date"],
  },
  commerce: {
    label: "Commerce",
    model: Commerce,
    seedCount: 80,
    generate: (count) => createBatch(createCommerceRecord, count),
    aliases: [],
  },
  localizations: {
    label: "Localization",
    model: LocalizationRecord,
    seedCount: 80,
    generate: (count) => createBatch(createLocalizationRecord, count),
    aliases: ["localization"],
  },
  airlines: {
    label: "Airline",
    model: AirlineRecord,
    seedCount: 80,
    generate: (count) => createBatch(createAirlineRecord, count),
    aliases: ["airline"],
  },
  books: {
    label: "Book",
    model: BookRecord,
    seedCount: 80,
    generate: (count) => createBatch(createBookRecord, count),
    aliases: ["book"],
  },
  colors: {
    label: "Color",
    model: ColorRecord,
    seedCount: 80,
    generate: (count) => createBatch(createColorRecord, count),
    aliases: ["color"],
  },
  companies: {
    label: "Company",
    model: CompanyRecord,
    seedCount: 80,
    generate: (count) => createBatch(createCompanyRecord, count),
    aliases: ["company"],
  },
  databases: {
    label: "Database",
    model: DatabaseRecord,
    seedCount: 80,
    generate: (count) => createBatch(createDatabaseRecord, count),
    aliases: ["database"],
  },
  foods: {
    label: "Food",
    model: FoodRecord,
    seedCount: 80,
    generate: (count) => createBatch(createFoodRecord, count),
    aliases: ["food"],
  },
  images: {
    label: "Images",
    model: ImageAsset,
    seedCount: 80,
    generate: (count) => createBatch(createImageRecord, count),
    aliases: ["image"],
  },
  lorem: {
    label: "Lorem",
    model: LoremRecord,
    seedCount: 80,
    generate: (count) => createBatch(createLoremRecord, count),
    aliases: [],
  },
  music: {
    label: "Music",
    model: MusicRecord,
    seedCount: 80,
    generate: (count) => createBatch(createMusicRecord, count),
    aliases: [],
  },
  phones: {
    label: "Phones",
    model: PhoneRecord,
    seedCount: 80,
    generate: (count) => createBatch(createPhoneRecord, count),
    aliases: ["phone"],
  },
  science: {
    label: "Science",
    model: ScienceRecord,
    seedCount: 80,
    generate: (count) => createBatch(createScienceRecord, count),
    aliases: [],
  },
  vehicles: {
    label: "Vehicle",
    model: VehicleRecord,
    seedCount: 80,
    generate: (count) => createBatch(createVehicleRecord, count),
    aliases: ["vehicle"],
  },
  words: {
    label: "Words",
    model: WordRecord,
    seedCount: 80,
    generate: (count) => createBatch(createWordRecord, count),
    aliases: ["word"],
  },
};

function resolveDatasetKey(datasetKey) {
  if (datasets[datasetKey]) {
    return datasetKey;
  }

  const match = Object.entries(datasets).find(([, dataset]) =>
    dataset.aliases.includes(datasetKey),
  );

  return match ? match[0] : null;
}

function getDatasetOrThrow(datasetKey) {
  const resolvedKey = resolveDatasetKey(datasetKey);
  const dataset = resolvedKey ? datasets[resolvedKey] : null;

  if (!dataset) {
    const error = new Error("Dataset not found");
    error.statusCode = 404;
    throw error;
  }

  return {
    key: resolvedKey,
    config: dataset,
  };
}

async function insertSafely(model, documents) {
  if (!documents.length) {
    return;
  }

  try {
    await model.insertMany(documents, { ordered: false });
  } catch (error) {
    if (error?.name !== "MongoBulkWriteError" && error?.name !== "BulkWriteError") {
      throw error;
    }
  }
}

async function ensureMinimumDocuments(datasetKey) {
  const { key, config: dataset } = getDatasetOrThrow(datasetKey);
  const initialCount = await dataset.model.countDocuments();
  let currentCount = initialCount;
  let attempts = 0;

  while (currentCount < dataset.seedCount) {
    if (attempts >= 5) {
      const error = new Error(
        `Unable to seed dataset "${datasetKey}" to target count ${dataset.seedCount}. Current count: ${currentCount}.`,
      );
      error.statusCode = 500;
      throw error;
    }

    const missingCount = dataset.seedCount - currentCount;
    const documents = dataset.generate(missingCount);

    await insertSafely(dataset.model, documents);
    currentCount = await dataset.model.countDocuments();
    attempts += 1;
  }

  return {
    key,
    label: dataset.label,
    count: currentCount,
    seedCount: dataset.seedCount,
    seeded: Math.max(currentCount - initialCount, 0),
  };
}

async function listDatasetRecords(datasetKey, countValue) {
  const { config: dataset } = getDatasetOrThrow(datasetKey);
  const limit = parseCount(countValue);

  await ensureMinimumDocuments(datasetKey);

  return dataset.model.find({}).sort({ createdAt: -1 }).limit(limit).lean();
}

async function warmDatasets(keys = Object.keys(datasets)) {
  const summary = [];

  for (const key of keys) {
    summary.push(await ensureMinimumDocuments(key));
  }

  return summary;
}

function listDatasets() {
  return Object.entries(datasets).map(([key, value]) => ({
    key,
    label: value.label,
    route: `/api/v1/${key}`,
    aliases: value.aliases.map((alias) => `/api/v1/${alias}`),
    seedCount: value.seedCount,
  }));
}

module.exports = {
  datasets,
  listDatasets,
  listDatasetRecords,
  resolveDatasetKey,
  warmDatasets,
};
