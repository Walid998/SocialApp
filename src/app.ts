import path from 'path';
import favicon from 'serve-favicon';
import compress from 'compression';
import helmet from 'helmet';
import cors from 'cors';

import feathers from '@feathersjs/feathers';
import configuration from '@feathersjs/configuration';
import express from '@feathersjs/express';
import { Application } from './declarations';
import logger from './logger';
import middleware from './middleware';
import services from './services';
import appHooks from './app.hooks';
import { HookContext as FeathersHookContext } from '@feathersjs/feathers';
import sequelize from './sequelize';
// Don't remove this comment. It's needed to format import lines nicely.

const seeder = require('feathers-seeder');
import { requestLogger } from './utils/requestLogger';
import { seederConfig } from './seeder-config';

const app: Application = express(feathers());
export type HookContext<T = any> = {
  app: Application;
} & FeathersHookContext<T>;

// Load app configuration
app.configure(configuration());
// Enable security, CORS, compression, favicon and body parsing
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', express.static(app.get('public')));

app.configure(sequelize);

// Set up Plugins and providers
app.configure(express.rest());

app.configure(seeder(seederConfig))

// app.seed().then(() => {
//   const server = app.listen(app.get('port'));
//   // ...
// }).catch(err => {
//   // ...
// });

app.use(requestLogger);
// Configure other middleware (see `middleware/index.ts`)
app.configure(middleware);
// Set up our services (see `services/index.ts`)
app.configure(services);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger } as any));

app.hooks(appHooks);

export default app;
