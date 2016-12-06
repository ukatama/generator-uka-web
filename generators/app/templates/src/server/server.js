import config from 'config';
import express from 'express';
import router from './router';
import { Server } from 'http';

class AppServer extends Server {
    constructor() {
        cosnt app = express(router);

        super(app);

        this.listen(config.get('server.listen'));
    }
}
export default new AppServer();
