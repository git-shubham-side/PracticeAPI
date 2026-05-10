const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const connectDB = require("./connectDB/db");
const { warmDatasets } = require("./services/datasets");
const {
  createDatasetHandler,
  getDatasetDirectory,
} = require("./controllers/datasets");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(helmet());
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || "*" }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: "Too many requests, please try again later." },
});

app.use("/api", limiter);

app.get("/", (req, res) => {
  res.redirect("/api/v1/home");
});

app.get("/api/v1/home", (req, res) => {
  res.render("landing", {
    title: "PracticeAPI | SaaS Landing",
    subtitle:
      "Build fast APIs with friendly tooling, modern architecture, and enterprise-ready reliability.",
  });
});

const usersHandler = createDatasetHandler("users");
const animalsHandler = createDatasetHandler("animals");
const locationsHandler = createDatasetHandler("locations");
const financeHandler = createDatasetHandler("finance");
const datesHandler = createDatasetHandler("dates");
const commerceHandler = createDatasetHandler("commerce");
const localizationHandler = createDatasetHandler("localizations");
const airlinesHandler = createDatasetHandler("airlines");
const booksHandler = createDatasetHandler("books");
const colorsHandler = createDatasetHandler("colors");
const companiesHandler = createDatasetHandler("companies");
const databasesHandler = createDatasetHandler("databases");
const foodsHandler = createDatasetHandler("foods");
const imagesHandler = createDatasetHandler("images");
const loremHandler = createDatasetHandler("lorem");
const musicHandler = createDatasetHandler("music");
const phonesHandler = createDatasetHandler("phones");
const scienceHandler = createDatasetHandler("science");
const vehiclesHandler = createDatasetHandler("vehicles");
const wordsHandler = createDatasetHandler("words");

app.get("/api/v1/health", (req, res) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() });
});

app.get("/api/v1/categories", getDatasetDirectory);

app.get("/api/v1/users", usersHandler);
app.get("/api/v1/animals", animalsHandler);
app.get("/api/v1/locations", locationsHandler);
app.get("/api/v1/finance", financeHandler);
app.get("/api/v1/date", datesHandler);
app.get("/api/v1/dates", datesHandler);
app.get("/api/v1/commerce", commerceHandler);
app.get("/api/v1/localization", localizationHandler);
app.get("/api/v1/localizations", localizationHandler);
app.get("/api/v1/airline", airlinesHandler);
app.get("/api/v1/airlines", airlinesHandler);
app.get("/api/v1/book", booksHandler);
app.get("/api/v1/books", booksHandler);
app.get("/api/v1/color", colorsHandler);
app.get("/api/v1/colors", colorsHandler);
app.get("/api/v1/company", companiesHandler);
app.get("/api/v1/companies", companiesHandler);
app.get("/api/v1/database", databasesHandler);
app.get("/api/v1/databases", databasesHandler);
app.get("/api/v1/food", foodsHandler);
app.get("/api/v1/foods", foodsHandler);
app.get("/api/v1/image", imagesHandler);
app.get("/api/v1/images", imagesHandler);
app.get("/api/v1/lorem", loremHandler);
app.get("/api/v1/music", musicHandler);
app.get("/api/v1/phone", phonesHandler);
app.get("/api/v1/phones", phonesHandler);
app.get("/api/v1/science", scienceHandler);
app.get("/api/v1/vehicle", vehiclesHandler);
app.get("/api/v1/vehicles", vehiclesHandler);
app.get("/api/v1/word", wordsHandler);
app.get("/api/v1/words", wordsHandler);

app.use(notFound);
app.use(errorHandler);

let server;

const shutdown = (signal) => {
  console.log(`\n${signal} received. Shutting down gracefully...`);

  if (!server) {
    process.exit(0);
    return;
  }

  server.close(() => {
    console.log("HTTP server closed.");
    process.exit(0);
  });
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

process.on("unhandledRejection", (error) => {
  console.error("Unhandled Rejection:", error);

  if (!server) {
    process.exit(1);
    return;
  }

  server.close(() => process.exit(1));
});

async function startServer() {
  try {
    await connectDB();
    const bootstrapSummary = await warmDatasets();

    console.log("Dataset bootstrap complete:");
    bootstrapSummary.forEach((entry) => {
      const seededMessage =
        entry.seeded > 0 ? `${entry.seeded} inserted` : "already ready";
      console.log(
        `- ${entry.key}: ${entry.count}/${entry.seedCount} (${seededMessage})`,
      );
    });

    const PORT = process.env.PORT || 3000;
    const HOST = process.env.HOST || "0.0.0.0";
    const displayHost = HOST === "0.0.0.0" ? "localhost" : HOST;

    server = app.listen(PORT, HOST, () => {
      console.log(`Server running on: http://${displayHost}:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();

module.exports = app;
