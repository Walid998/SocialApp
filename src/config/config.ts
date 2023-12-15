'use strict';
import * as dotenv from 'dotenv';
dotenv.config();


const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_DIALECT } = process.env;

const sqlizeConfig = {
  'development': {
    'username': DB_USERNAME,
    'password': DB_PASSWORD,
    'database': DB_NAME,
    'host': DB_HOST,
    'dialect': DB_DIALECT
  }
};

module.exports = {
  development: sqlizeConfig.development
};
