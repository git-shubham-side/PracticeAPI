const router = require("express").Router();

const { redirectToHome, renderLandingPage } = require("../controllers/pages");

router.get("/", redirectToHome);
router.get(["/api", "/v1", "/api/v1", "/api/v1/"], redirectToHome);
router.get("/api/v1/home", renderLandingPage);

module.exports = router;
