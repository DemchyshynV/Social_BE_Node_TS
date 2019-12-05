import {Router} from "express";
import {photosController} from "../../controllers/photos";

const router = Router();

router.post('/set', photosController.setPhoto);
router.get('/get', photosController.getPhoto)

export const photosRouter = router;
