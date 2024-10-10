import { getAllFamily, getPersonById } from "../services/family.js";
import createHttpError from 'http-errors';

export const getAllFamilyController = async (req, res, next ) => {

 const family = await getAllFamily();
 res.json({
    status: 200,
    message: 'Successfully found family!',
    data: family,
  });

};

export const getPersonByIdController = async (req, res) => {

    const {personId} = req.params;
    const person = await getPersonById(personId);
    if(!person) {
        throw createHttpError(404,'Person not found');
    }

    res.status(200).json({
        data: person,
        message: `Successfully found person with id ${personId}`
    });

};


export const createPersonController = async (req, res) => {


};
