const app = require("./app");
const connectDB = require("./connectDB/db");
const { warmDatasets } = require("./services/datasets");

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

if (require.main === module) {
  startServer();
}

module.exports = {
  startServer,
};
