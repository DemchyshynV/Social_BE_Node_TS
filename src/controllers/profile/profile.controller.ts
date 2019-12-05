import {Response, Request, NextFunction} from "express";

class ProfileController {
    async getProfile(req: Request, res: Response, next: NextFunction){
        try {

        }catch (e) {
            next(e)
        }
    }
    async setAvatar(req: Request, res: Response, next: NextFunction){
        try {

        }catch (e) {
            next(e)
        }
    }
}
export const profileController = new ProfileController()
