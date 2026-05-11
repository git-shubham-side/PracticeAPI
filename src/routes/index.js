const router = require("express").Router();
const apiRoutes = require("./api.routes");
const webRoutes = require("./web.routes");

router.use(webRoutes);
router.use("/api/v1", apiRoutes);

module.exports = router;
