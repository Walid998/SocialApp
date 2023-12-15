import logger from './logger';
import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const { APP_HOST, APP_PORT } = process.env;
const port = APP_PORT;

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

const server = app.listen(port);
server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', APP_HOST, port)
);


