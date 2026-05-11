const router = require("express").Router();

const {
  redirectToHome,
  renderLandingPage,
  renderDocsPage,
} = require("../controllers/pages");

router.get("/", redirectToHome);
router.get(["/api", "/v1", "/api/v1", "/api/v1/"], redirectToHome);
router.get("/api/v1/home", renderLandingPage);
router.get("/api/v1/docs", renderDocsPage);

module.exports = router;
