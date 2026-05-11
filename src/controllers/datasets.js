const asyncHandler = require("../middlewares/asyncHandler");
const {
  listDatasets,
  listDatasetRecords,
  resolveDatasetKey,
} = require("../services/datasets");

const getDatasetRecords = asyncHandler(async (req, res) => {
  const datasetKey =
    resolveDatasetKey(req.params.datasetKey) || req.params.datasetKey;
  const result = await listDatasetRecords(datasetKey, req.query);

  res.json({
    success: true,
    status: 200,
    dataset: datasetKey,
    data: result.data,
    pagination: result.pagination,
    message: `Retrieved ${result.data.length} records from ${datasetKey}`,
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
