import { format, createLogger, transports, Logger } from 'winston';
import config from './config';

const enumerateErrorFormat = format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const logger: Logger = createLogger({
  level: config.nodeEnv === 'development' ? 'debug' : 'info',
  format: format.combine(
    enumerateErrorFormat(),
    config.nodeEnv === 'development' ? format.colorize() : format.uncolorize(),
    format.splat(),
    format.printf(({ level, message }) => `${level}: ${message}`)
  ),
  transports: [
    new transports.Console({
      stderrLevels: ['error'],
    }),
  ],
});

export default logger;