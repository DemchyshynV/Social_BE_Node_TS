import {Request, Response, NextFunction} from "express";

class MessageController {
    async getSenders(req: Request, res: Response, next: NextFunction){
        try{

        }catch (e) {
            next(e)
        }
    }
    async getBody(req: Request, res: Response, next: NextFunction){
        try {

        }catch (e) {
            next(e)
        }
    }
    async addMessage(req: Request, res: Response, next: NextFunction){
        try {

        }catch (e) {
            next(e)
        }
    }
}
export const messageController = new MessageController()
