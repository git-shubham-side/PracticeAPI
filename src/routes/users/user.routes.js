// unused removed later: app.js does not mount this legacy users route tree
const router = require("express").Router();
const { getUsers, getUserById, createUser } = require("./user.controller");
const validate = require("../../middlewares/validate");
const { createUserSchema } = require("./user.schema");

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", validate(createUserSchema), createUser);

module.exports = router;
