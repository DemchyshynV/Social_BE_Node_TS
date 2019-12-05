import {Document, Model, model, Schema, Types} from "mongoose";

import {IUser} from "../../interfaces";
import {config} from "../../configs";
import {UserStatusEnum} from "../../constants";

export type UserType = IUser & Document;

export let UserSchema: Schema;
UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true,
        default: UserStatusEnum.ACTIVE
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    },
    updated_at: {
        type: Date
    },
    profile_id: {
        type: Types.ObjectId,
        ref: config.PROFILE_COLLECTION_NAME,

    }
});
export const User: Model<UserType> = model<UserType>(config.USER_COLLECTION_NAME, UserSchema, config.USER_COLLECTION_NAME);
