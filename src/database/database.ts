import { Sequelize } from 'sequelize';
import configs from '../configs';
const AllSequelizeConfig = require('./config');
const sequelizeConfig = configs.NODE_ENV
    ? AllSequelizeConfig[configs.NODE_ENV]
    : AllSequelizeConfig.development;
    
class Database {
    public sequelize: Sequelize | undefined;

    constructor() {
        this.connectToDatabse();
    }

    private async connectToDatabse() {
        this.sequelize = new Sequelize({
            username: sequelizeConfig.username,
            password: sequelizeConfig.password,
            database: sequelizeConfig.database,
            host: sequelizeConfig.host,
            dialect: 'postgres',
            port: sequelizeConfig.port,
        });

        this.sequelize
            .authenticate()
            .then(() => {
                console.log('Database Connection Established Successfully!');
            })
            .catch(() => {
                console.log('Error In Database Connection!');
            });
    }
}

export default Database;
