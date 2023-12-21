import * as dotenv from 'dotenv';
dotenv.config();

const configs = {
    NODE_ENV: process.env.NODE_ENV,
    APP_HOST: process.env.APP_HOST,
    APP_PORT: process.env.APP_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    DB_DIALECT: process.env.DB_DIALECT,
    DB_PORT: process.env.DB_PORT
};

export default configs;