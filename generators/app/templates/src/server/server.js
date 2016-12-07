import config from 'config';
import express from 'express';
import { Server } from 'http';
import { expressLogger, systemLogger } from './logger';
import router from './router';

class AppServer extends Server {
    constructor() {
        const app = express();

        app.set('view engine', 'pug');
        app.use(expressLogger);
        app.use(router);

        super(app);

        this.listen(config.get('server.listen'), () => {
            systemLogger.info('listening', this.address());
        });
    }
}
export default new AppServer();
