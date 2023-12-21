import configs from '../configs';

const DB_HOST = configs.DB_HOST;
const DB_USERNAME = configs.DB_USERNAME;
const DB_PASSWORD = configs.DB_PASSWORD;
const DB_NAME = configs.DB_NAME;
const DB_PORT = configs.DB_PORT as unknown as number;

export const sequelizeConfig = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        dialect: 'postgres',
        port: DB_PORT,
    },
};

module.exports = {
    development: sequelizeConfig.development,
    test: sequelizeConfig.development,
    production: sequelizeConfig.development,
};
