import * as cors from 'cors';
import * as express from 'express'
import {resolve as resolvePath} from 'path'
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import {apiRouter} from './routes';
import {config} from "./configs";

class App {
    public readonly app: express.Application = express();

    constructor() {
        (global as any).appRoot = resolvePath(__dirname, '../');
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.mountRoutes();
        this.setupDB();
    }

    private mountRoutes(): void {
        this.app.use('/api', apiRouter);
    }

    private setupDB(): void {
        const mongoDB = `mongodb://${config.DATABASE_IP}:${config.DATABASE_PORT}/${config.DATABASE_NAME}`;
        mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => console.log('MongoDB connected'));
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'MongoDB connection error'));
    }
}

export const app = new App().app;
