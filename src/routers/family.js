import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getAllFamilyController, getPersonByIdController } from "../controllers/family.js";

const router = Router();

router.get('/family', ctrlWrapper(getAllFamilyController));

router.get('/family/:personId', ctrlWrapper(getPersonByIdController));

export default router;

