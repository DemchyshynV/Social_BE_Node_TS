import {Request, Response, NextFunction} from "express";

class FriendsController {
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (e) {
            next(e);
        }
    }

    async saveFriend(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (e) {
            next(e)
        }
    }

    async getMyFriends(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (e) {
            next(e);
        }
    }
    async delFriend(req: Request, res: Response, next: NextFunction){
        try {

        }catch (e) {
            next(e)
        }
    }
    async getMyRequests(req: Request, res: Response, next: NextFunction){
        try {

        }catch (e) {
            next(e)
        }
    }
    async getFriendsRequest(req: Request, res: Response, next: NextFunction){
        try {

        }catch (e) {
            next(e)
        }
    }

}

export const friendsController = new FriendsController();
