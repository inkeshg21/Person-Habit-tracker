//Validation
const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  const { error, value } = schema.validate(data);

  return error;
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  const { error, value } = schema.validate(data);

  return error;
};

const habitValidation = (data) => {
  const schema = Joi.object({
    HabitName: Joi.string().min(1).max(15).required(),
    Description: Joi.string().max(100).required(),
    Occurrence: Joi.object({
      Mon: Joi.bool().required(),
      Tues: Joi.bool().required(),
      Wed: Joi.bool().required(),
      Thurs: Joi.bool().required(),
      Fri: Joi.bool().required(),
      Sat: Joi.bool().required(),
      Sun: Joi.bool().required(),
    }).required(),
    TimesPer: Joi.number().required(),
    Icon: Joi.number().required(),
    Color: Joi.string().required(),
  });

  const { error, value } = schema.validate(data);

  return error;
};

const deleteValidation = (data) => {
  const schema = Joi.object({
    _id: Joi.string().required()
  })

  const { error, value } = schema.validate(data);

  return error;
}

const editValidation = (data) => {
  const schema = Joi.object({
    _id: Joi.string().required(),
    Description: Joi.string().max(100).required(),
    Occurrence: Joi.object({
      Mon: Joi.bool().required(),
      Tues: Joi.bool().required(),
      Wed: Joi.bool().required(),
      Thurs: Joi.bool().required(),
      Fri: Joi.bool().required(),
      Sat: Joi.bool().required(),
      Sun: Joi.bool().required(),
    }).required(),
    TimesPer: Joi.number().required(),
    Color: Joi.string().required(),
  });

  const { error, value } = schema.validate(data);

  return error;
};

module.exports = {
  registerValid: registerValidation,
  loginValid: loginValidation,
  habitValid: habitValidation,
  deleteValid: deleteValidation,
  editValid: editValidation
};
