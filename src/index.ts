import * as http from 'http';
import {app} from "./app";
import {config} from "./configs/config";

const server = http.createServer(app);

server.listen(config.PORT, () => {
    console.log(`App listening on port ${config.PORT}!`);
});
process.on('SIGTERM', () => {
    server.close(() => {
        process.exit(0)
    })
})
