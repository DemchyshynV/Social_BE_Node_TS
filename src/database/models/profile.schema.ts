import {Document, model, Model, Schema} from "mongoose";
import {IProfile} from "../../interfaces";
import {config} from "../../configs/config";

export type ProfileType = IProfile & Document;
export let ProfileSchema: Schema;
ProfileSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String
    },
    age:{
        type:Number,
        required:true
    },
    avatar:{
        type:String
    },
    created_at:{
        type:Date,
        required:true,
        default:Date.now
    },
    updated_at:{
        type:Date
    }
})

export const Profile: Model<ProfileType> = model<ProfileType>(config.PROFILE_COLLECTION_NAME, ProfileSchema, config.PROFILE_COLLECTION_NAME);
