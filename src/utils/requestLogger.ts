import logger from '../logger';

export function requestLogger(req: any, res: any, next: any) {
  const { method, originalUrl } = req;
  const timestamp = new Date().toISOString();
  res.on('finish', () => {
    const { statusCode } = res;
    logger.info(`[${timestamp}] ${method} ${originalUrl} ${statusCode}`);
  });
  next();
}
