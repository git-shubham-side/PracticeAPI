const path = require("path");
require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const routes = require("./routes");
const app = express();

// ─── Security & Middleware ────────────────────────────────────────────────────
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");
app.use(helmet());
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || "*" }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//__________________Controllers  ___________________________________________________________________
const userController = require("./controllers/users");

// ─── Rate Limiting ────────────────────────────────────────────────────────────
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: "Too many requests, please try again later." },
});
app.use("/api", limiter);

// ─── Routes ───────────────────────────────────────────────────────────────────
// app.use("/api/v1", routes);

//Home Route
app.get("/", (req, res) => {
  res.redirect("/api/v1");
});
//Welcome + Home Route
app.get("/api/v1", (req, res) => {
  res.json({ message: "welcome to PracticeAPI" });
});

//Users Data
app.get("/api/v1/users", userController);

// ─── 404 & Error Handler ─────────────────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

// ─── Graceful Shutdown ────────────────────────────────────────────────────────
const shutdown = (signal) => {
  console.log(`\n${signal} received. Shutting down gracefully...`);
  server.close(() => {
    console.log("HTTP server closed.");
    process.exit(0);
  });
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(() => process.exit(1));
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
