import {Request, Response, NextFunction} from "express";
import {User} from "../../database/models";

class AuthController {
    async login(req:Request, res: Response, next: NextFunction){
        try {


        }catch (e) {
            next(e);
        }
    }
    async register(req:Request, res:Response, next: NextFunction){
        try{
            let isAdmin:boolean =false;
            const count = await User.count('email');
            if (count===0){
                isAdmin=true;
            }
        }catch (e) {
            next(e)
        }
    }

}
export const authController = new AuthController();
