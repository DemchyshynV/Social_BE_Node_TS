import {Response, Request, NextFunction} from "express";

class PhotosController {
    async setPhoto(req: Request, res: Response, next: NextFunction){
        try {

        }catch (e) {
            next(e)
        }
    }
    async getPhoto(req: Request, res: Response, next: NextFunction){
        try {

        }catch (e) {
            next(e)
        }
    }
}

export const photosController = new PhotosController()
