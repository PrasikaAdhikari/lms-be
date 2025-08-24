import Joi from "joi";

const joiValidator = (schema, req, res, next) => {
  schema.validate({
    test: "test",
    key: "key",
  });
  const { error } = schema.validate(req.body);
  error
    ? res.json({
        status: "error",
        message: error.message,
      })
    : next();
};

export const loginValidation = (req, res, next) => {
  let loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  joiValidator(loginSchema, req, res, next);
};

export const createBookValidation = (req, res, next) => {
  // validation
  // if passede go to next
  // else
  // retur response

  let createBookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    isbn: Joi.string().required(),
    genre: Joi.string().required(),
    publishedYear: Joi.number().required(),
    description: Joi.string(),
  });

  joiValidator(createBookSchema, req, res, next);
};
