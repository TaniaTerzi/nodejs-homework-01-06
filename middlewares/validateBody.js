const { HttpError } = require("../helpers");


const validateBody = (schema, message) => {
  const func = (req, res, next) => {
    const body = req.body;
    if (Object.keys(body).length === 0) {
      next(HttpError(400, message));
    };
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateBody;

