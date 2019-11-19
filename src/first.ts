import LoggerFactory from './helper/logger';
import { LoggerType } from './helper/logger/loggerType.enum';

const pino = new LoggerFactory("firstPino", LoggerType.PINO);
const winston = new LoggerFactory("firstWinston", LoggerType.WINSTON);

export function test() {
  winston.info(`That's my first message`, {
    custom: "object"
  });
  winston.warn(`That's a warning!`);
  winston.debug(`General DEBUG message`);
  winston.error(`That's my fantastic error`);
  winston.fatal(`FATAL ERROR`);

  pino.info(`That's my first message`, {
    custom: "object"
  });
  pino.warn(`That's a warning!`);
  pino.debug(`General DEBUG message`);
  pino.error(`That's my fantastic error`);
  pino.fatal(`FATAL ERROR`);
}
