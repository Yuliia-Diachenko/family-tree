import Joi from 'joi';

export const createPersonSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
      'string.base': 'Username should be a string',
      'string.min': 'Username should have at least {#limit} characters',
      'string.max': 'Username should have at most {#limit} characters',
      'any.required': 'Username is required',
  }),
  age: Joi.number().integer().min(0).max(150).required().messages({
      'number.base': 'Age should be a number',
      'any.required': 'Age is required',
  }),
  parents: Joi.array().items(Joi.string().min(3).max(60)).messages({
      'array.base': 'Parents should be an array of strings',
      'string.min': 'Parents should have at least {#limit} characters',
      'string.max': 'Parents should have at most {#limit} characters',
  }),
  ancestors: Joi.array().items(Joi.string().min(3).max(60)).messages({
      'array.base': 'Ancestors should be an array of strings',
      'string.min': 'Ancestors should have at least {#limit} characters',
      'string.max': 'Ancestors should have at most {#limit} characters',
  }),
  children: Joi.array().items(Joi.string().min(3).max(60)).messages({
      'array.base': 'Children should be an array of strings',
      'string.min': 'Children should have at least {#limit} characters',
      'string.max': 'Children should have at most {#limit} characters',
  }),
  grandchildren: Joi.array().items(Joi.string().min(3).max(60)).messages({
      'array.base': 'Grandchildren should be an array of strings',
      'string.min': 'Grandchildren should have at least {#limit} characters',
      'string.max': 'Grandchildren should have at most {#limit} characters',
  }),
});

export const updatePersonSchema = Joi.object({
  name: Joi.string().min(3).max(30).messages({
      'string.base': 'Username should be a string',
      'string.min': 'Username should have at least {#limit} characters',
      'string.max': 'Username should have at most {#limit} characters',
  }),
  age: Joi.number().integer().min(0).max(150).messages({
      'number.base': 'Age should be a number',
      'any.required': 'Age is required',
  }),
  parents: Joi.array().items(Joi.string().min(3).max(60)).messages({
      'array.base': 'Parents should be an array of strings',
      'string.min': 'Parents should have at least {#limit} characters',
      'string.max': 'Parents should have at most {#limit} characters',
  }),
  ancestors: Joi.array().items(Joi.string().min(3).max(60)).messages({
      'array.base': 'Ancestors should be an array of strings',
      'string.min': 'Ancestors should have at least {#limit} characters',
      'string.max': 'Ancestors should have at most {#limit} characters',
  }),
  children: Joi.array().items(Joi.string().min(3).max(60)).messages({
      'array.base': 'Children should be an array of strings',
      'string.min': 'Children should have at least {#limit} characters',
      'string.max': 'Children should have at most {#limit} characters',
  }),
  grandchildren: Joi.array().items(Joi.string().min(3).max(60)).messages({
      'array.base': 'Grandchildren should be an array of strings',
      'string.min': 'Grandchildren should have at least {#limit} characters',
      'string.max': 'Grandchildren should have at most {#limit} characters',
  }),
});
