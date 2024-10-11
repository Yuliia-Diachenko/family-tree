import { createPerson, getAllFamily, getPersonById, deletePerson, updatePerson } from "../services/family.js";
import createHttpError from 'http-errors';

export const getAllFamilyController = async (req, res, next ) => {

 const family = await getAllFamily();
 res.status(200).json({
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
    const person = await createPerson(req.body);
    res.json({
        status: 101,
        message: 'Successfully created a person!',
        data: person,
    });

};

export const deletePersonByIdController = async (req, res, next) => {
    const {personId} = req.params;

    const person = await deletePerson(personId);

    if (!person) {
        next(createHttpError(404, 'Person not found'));
        return;
    }
    res.status(204).send();
};

export const upsertPersonByIdController = async (req, res, next) => {
    const {personId} = req.params;
    const result = await updatePerson(personId, req.body, {upsert: true,});
    if (!result) {
        next(createHttpError(404, 'Person not found'));
        return;
      }
    const status = result.isNew ? 201 : 200;
    res.status(status).json({
        status,
        message: 'Successfully upserted a person',
        data: result.person,
    });
};

export const patchPersonController = async (req, res, next) => {
    const {personId} = req.params;
    const result = await updatePerson(personId, req.body);
    if (!result) {
        next(createHttpError(404, 'Person not found'));
        return;
      }

    res.status(200).json({
        status: 200,
        message: 'Successfully patched a person',
        data: result.person,
    });
};
