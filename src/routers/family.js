import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { patchPersonController, upsertPersonByIdController, getAllFamilyController, getPersonByIdController, createPersonController, deletePersonByIdController } from "../controllers/family.js";

const router = Router();

router.get('/family', ctrlWrapper(getAllFamilyController));

router.get('/family/:personId', ctrlWrapper(getPersonByIdController));

router.post('/family',  ctrlWrapper(createPersonController));

router.delete('/family/:personId', ctrlWrapper(deletePersonByIdController));

router.put('/family/:personId', ctrlWrapper(upsertPersonByIdController));

router.patch('/family/:personId', ctrlWrapper(patchPersonController));

export default router;

