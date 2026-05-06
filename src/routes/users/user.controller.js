const userService = require("./user.service");
const asyncHandler = require("../../middlewares/asyncHandler");

exports.getUsers = asyncHandler(async (req, res) => {
  const users = await userService.findAll();
  res.json({ success: true, data: users });
});

exports.getUserById = asyncHandler(async (req, res) => {
  const user = await userService.findById(req.params.id);
  if (!user)
    return res.status(404).json({ success: false, message: "User not found" });
  res.json({ success: true, data: user });
});

exports.createUser = asyncHandler(async (req, res) => {
  const user = await userService.create(req.body);
  res.status(201).json({ success: true, data: user });
});
