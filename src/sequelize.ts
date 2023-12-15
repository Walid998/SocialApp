import { Sequelize } from 'sequelize';
import { Application } from './declarations';
import dotenv from 'dotenv';
dotenv.config();

export default function (app: Application): void {
  const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_DIALECT,DB_PORT } = process.env;
  const connectionString = `${DB_DIALECT}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
  const sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    logging: false,
    define: {
      freezeTableName: true
    }
  });
  const oldSetup = app.setup;

  app.set('sequelizeClient', sequelize);

  app.setup = function (...args): Application {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const models = sequelize.models;
    Object.keys(models).forEach(name => {
      if ('associate' in models[name]) {
        (models[name] as any).associate(models);
      }
    });

    // Sync to the database
    app.set('sequelizeSync', sequelize.sync());

    return result;
  };
}
