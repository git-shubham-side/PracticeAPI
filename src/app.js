const path = require("path");
require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");

const app = express();

// ─── Security & Middleware ────────────────────────────────────────────────────
app.use(helmet());
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || "*" }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function getL(req, res, next) {
  console.log("message-------------->", process.env.msg);
  next();
}

// Database Connection
// const connectDB = require("./connectDB/db");
// connectDB(process.env.MONGODB_URI)
//   .then(() => {
//     console.log("DB Connected");
//   })
//   .catch((err) => {
//     console.log("DB Connection ERROR");
//     console.log(err.message);
//   });

// ─── Rate Limiting ────────────────────────────────────────────────────────────
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: "Too many requests, please try again later." },
});
app.use("/api", limiter);
app.use(getL);
// ─── Routes ───────────────────────────────────────────────────────────────────
// app.use("/api/v1", routes);
app.get("/api/v1/users", (req, res) => {
  res.json({ status: "active" });
});

// ─── 404 & Error Handler ─────────────────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

// module.exports = app;

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});
