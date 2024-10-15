import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { patchPersonController, upsertPersonByIdController, getAllFamilyController, getPersonByIdController, createPersonController, deletePersonByIdController } from "../controllers/family.js";
import {createPersonSchema, updatePersonSchema } from '../validation/family.js';
import { validateBody } from "../midllewares/validateBody.js";
import { isValidId } from "../midllewares/isValidId.js";


const router = Router();

router.get('/family', ctrlWrapper(getAllFamilyController));

router.get('/family/:personId', isValidId, ctrlWrapper(getPersonByIdController));

router.post('/family', validateBody(createPersonSchema), ctrlWrapper(createPersonController));

router.delete('/family/:personId', ctrlWrapper(deletePersonByIdController));

router.put('/family/:personId', validateBody(createPersonSchema), ctrlWrapper(upsertPersonByIdController));

router.patch('/family/:personId', validateBody(updatePersonSchema), ctrlWrapper(patchPersonController));

export default router;

