const router = require("express").Router();

const {
  getDatasetDirectory,
  getDatasetRecords,
} = require("../controllers/datasets");
const { getHealthStatus } = require("../controllers/system");

router.get("/health", getHealthStatus);
router.get("/categories", getDatasetDirectory);
router.get("/:datasetKey", getDatasetRecords);

module.exports = router;
