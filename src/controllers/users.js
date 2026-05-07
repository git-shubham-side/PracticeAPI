const Users = require("../models/Users");
module.exports = async (req, res) => {
  const count = Number(req.query.count || 10);
  const result = await Users.find({}).limit(count);
  res.json(result);
};
