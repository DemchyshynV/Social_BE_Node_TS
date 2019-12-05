import {Router} from "express";
import {messageController} from "../../controllers/message";

const router = Router();

router.get('/getSenders', messageController.getSenders);
router.get('/getBody:id', messageController.getBody);
router.post('/addMessage', messageController.addMessage);

export const messageRouter = router;
