import Joi from 'joi';

export const createPersonSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        'string.base': 'Username should be a string',
        'string.min': 'Username should have at least {#limit} characters',
        'string.max': 'Username should have at most {#limit} characters',
        'any.required': 'Username is required',
      }),
    age: Joi.number().integer().min(6).max(16).required().messages({
        'number.base': 'Age should be a number',
        'any.required': 'Age is required',
      }),
    parents: Joi.string.min(3).max(30).messages({
        'string.base': 'Parents should be a string',
        'string.min': 'Parents should have at least {#limit} characters',
        'string.max': 'Parents should have at most {#limit} characters',
      }),
    ancestors: Joi.string.min(3).max(30).messages({
        'string.base': 'Ancestors should be a string',
        'string.min': 'Ancestors should have at least {#limit} characters',
        'string.max': 'Ancestors should have at most {#limit} characters',
      }),
    children: Joi.string.min(3).max(30).messages({
        'string.base': 'Children should be a string',
        'string.min': 'Children should have at least {#limit} characters',
        'string.max': 'Children should have at most {#limit} characters',
      }),
    grandchildren: Joi.string.min(3).max(30).messages({
        'string.base': 'Grandchildren should be a string',
        'string.min': 'Grandchildren should have at least {#limit} characters',
        'string.max': 'Grandchildren should have at most {#limit} characters',
      }),
});

export const updatePersonSchema = Joi.object({
    name: Joi.string().min(3).max(30).messages({
        'string.base': 'Username should be a string',
        'string.min': 'Username should have at least {#limit} characters',
        'string.max': 'Username should have at most {#limit} characters',
        'any.required': 'Username is required',
      }),
      age: Joi.number().integer().min(6).max(16).messages({
        'number.base': 'Age should be a number',
        'any.required': 'Age is required',
      }),
});
