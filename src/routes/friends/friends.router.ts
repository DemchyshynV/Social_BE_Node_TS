import {Router} from "express";
import {friendsController} from "../../controllers/friends";

const router = Router();

router.get('/getAll', friendsController.getAll);
router.get('/save:id', friendsController.saveFriend);
router.get('/myFriends', friendsController.getMyFriends);
router.delete('/del:id', friendsController.delFriend);
router.get('/myRequest', friendsController.getMyRequests);
router.get('friendsRequest', friendsController.getFriendsRequest);

export const friendsRouter = router;
