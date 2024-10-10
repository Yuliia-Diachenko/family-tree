import { PersonCollection } from "../db/models/family.js";

export const getAllFamily = async () => {
const family = await PersonCollection.find();
 return family;
};

export const getPersonById = async (personId) => {
    const person = await PersonCollection.findById(personId);
    return person;
};

