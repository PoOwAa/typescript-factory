import { LoggerFactory, PinoLogger, WinstonLogger } from './helper/logger2';
import MyCustomLogger from './myCustomLogger';

const pino = LoggerFactory<PinoLogger>("secondPino", PinoLogger);
const winston = LoggerFactory<WinstonLogger>("secondWinston", WinstonLogger);
const customLogger = LoggerFactory<MyCustomLogger>(
  "secondCustom",
  MyCustomLogger
);

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

  customLogger.info(`That's my first message`, {
    custom: "object"
  });
  customLogger.warn(`That's a warning!`);
  customLogger.debug(`General DEBUG message`);
  customLogger.error(`That's my fantastic error`);
  customLogger.fatal(`FATAL ERROR`);
}
