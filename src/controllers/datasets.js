const asyncHandler = require("../middlewares/asyncHandler");
const {
  listDatasets,
  listDatasetRecords,
  resolveDatasetKey,
} = require("../services/datasets");

const getDatasetRecords = asyncHandler(async (req, res) => {
  const datasetKey = resolveDatasetKey(req.params.datasetKey) || req.params.datasetKey;
  const data = await listDatasetRecords(datasetKey, req.query.count);

  res.json({
    success: true,
    dataset: datasetKey,
    count: data.length,
    data,
  });
});

const getDatasetDirectory = asyncHandler(async (req, res) => {
  const data = listDatasets();

  res.json({
    success: true,
    count: data.length,
    data,
  });
});

module.exports = {
  getDatasetRecords,
  getDatasetDirectory,
};
