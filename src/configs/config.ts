import * as dotenv from 'dotenv'
import {resolve} from 'path'

dotenv.config({path: resolve(__dirname, '../../.env.example')});
export const config = {
    DATABASE_NAME: process.env.DATABASE_NAME || 'mybook',
    DATABASE_USER: process.env.DATABASE_USER || 'root',
    DATABASE_PASS: process.env.DATABASE_PASS || 'root',
    DATABASE_IP: process.env.DATABASE_IP || '127.0.0.1',
    DATABASE_PORT: process.env.DATABASE_PORT || 27017,

    USER_COLLECTION_NAME: process.env.USER_COLLECTION_NAME || 'User',
    PROFILE_COLLECTION_NAME: process.env.PROFILE_COLLECTION_NAME || 'Profile',
    MESSAGE_COLLECTION_NAME: process.env.MESSAGE_COLLECTION_NAME || 'Message',
    PHOTO_COLLECTION_NAME: process.env.PHOTO_COLLECTION_NAME || 'Photo',
    FRIEND_COLLECTION_NAME: process.env.FRIEND_COLLECTION_NAME || 'Friend',

    PORT: 3000
};
