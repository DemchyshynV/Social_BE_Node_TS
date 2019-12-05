import {Router} from "express";

import {authRouter} from "../auth";
import {friendsRouter} from "../friends";
import {messageRouter} from "../message";
import {photosRouter} from "../photos";
import {profileRouter} from "../profile";

const router = Router();

router.use('/auth', authRouter);
router.use('/friends', friendsRouter);
router.use('/message', messageRouter);
router.use('/photos', photosRouter);
router.use('/profile', profileRouter);

export const apiRouter =router;
