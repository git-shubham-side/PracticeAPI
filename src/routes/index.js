// unused removed later: app.js now registers category routes directly
const router = require("express").Router();
const { datasets } = require("../services/datasets");
const {
  createDatasetHandler,
  getDatasetDirectory,
} = require("../controllers/datasets");

router.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() });
});

router.get("/categories", getDatasetDirectory);

Object.entries(datasets).forEach(([datasetKey, dataset]) => {
  router.get(`/${datasetKey}`, createDatasetHandler(datasetKey));

  dataset.aliases.forEach((alias) => {
    router.get(`/${alias}`, createDatasetHandler(datasetKey));
  });
});

module.exports = router;
