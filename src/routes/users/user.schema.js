// unused removed later: validation schema belongs to an unmounted legacy route
const Joi = require("joi");

exports.createUserSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
