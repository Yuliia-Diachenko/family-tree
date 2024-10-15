import { v4 as uuidv4 } from 'uuid';

export const generateUniqueId = (req, res, next) => {
    if (!req.body._id) {
        req.body._id = uuidv4();
    }
    next();
};
