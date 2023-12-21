import express, { Application, Request, Response } from 'express';
import configs from './configs';
import Database from './database/database';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.databaseSync();
        this.routes();
    }

    protected routes() {
        this.app.route('/').get((req: Request, res: Response) => {
            res.send('Hello World');
        });
    }

    protected databaseSync(){
        const db = new Database();
        db.sequelize?.sync();
    }
}

const port = configs.APP_PORT;

const app = new App().app;

app.listen(port, () => {
    console.log(`Server Starts Successfully: http://localhost:${port}`);
});
