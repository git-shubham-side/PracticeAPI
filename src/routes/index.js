const router = require("express").Router();
const userRoutes = require("./users/user.routes");

// ─── Health Check ─────────────────────────────────────────────────────────────
router.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() });
});

// ─── Feature Routes ───────────────────────────────────────────────────────────
router.use("/users", userRoutes);

module.exports = router;
