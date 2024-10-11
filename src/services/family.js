import { PersonCollection } from "../db/models/family.js";

export const getAllFamily = async () => {
const family = await PersonCollection.find();
 return family;
};

export const getPersonById = async (personId) => {
    const person = await PersonCollection.findById(personId);
    return person;
};

export const createPerson = async (payload) => {
    const person = await PersonCollection.create(payload);
    return person;

};

export const deletePerson = async (personId) => {
    const person = await PersonCollection.findOneAndDelete({_id: personId});
    return person;
};

export const updatePerson = async (personId, payload, options = {}) => {
    const rawResult = await PersonCollection.findOneAndUpdate({_id: personId}, payload,
        {
          new: true,
          includeResultMetadata: true,
          ...options,
        },);

        if (!rawResult || !rawResult.value) return null;

        return {
            person: rawResult.value,
            isNew: Boolean(rawResult?.lastErrorObject?.upserted),
        };

};
