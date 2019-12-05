import {Router} from "express";
import {profileController} from "../../controllers/profile";

const router = Router();

router.get('/getProfile', profileController.getProfile);
router.post('/setAvatar', profileController.setAvatar);

export const profileRouter = router;
