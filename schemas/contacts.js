const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required().error(new Error("missing required name field")),
  email: Joi.string()
    .email()
    .required()
    .error(new Error("missing required email field")),
  phone: Joi.string()
    .required()
    .error(new Error("missing required phone field")),
});

const addNewSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
}).error(new Error("missing fields"));

module.exports = { addSchema, addNewSchema };
