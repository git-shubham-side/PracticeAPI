const asyncHandler = require("../middlewares/asyncHandler");
const { listDatasets, listDatasetRecords } = require("../services/datasets");

const createDatasetHandler = (datasetKey) =>
  asyncHandler(async (req, res) => {
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
  createDatasetHandler,
  getDatasetDirectory,
};
