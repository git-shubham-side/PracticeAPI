const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");
const routes = require("./routes");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "script-src": ["'self'", "https://unpkg.com"],
      },
    },
  }),
);
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
app.use(routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
