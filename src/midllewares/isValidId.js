import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { personId } = req.params;
  if (!isValidObjectId(personId)) {
    throw createHttpError(400, 'Bad Request');
  }

  next();
};
