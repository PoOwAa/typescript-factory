import LoggerInterface from './logger.interface';
import { LoggerType } from './loggerType.enum';
import PinoLogger from './pino';
import WinstonLogger from './winston';

export default class LoggerFactory implements LoggerInterface {
  private logger: PinoLogger | WinstonLogger;

  /**
   *Creates an instance of LoggerFactory.
   * @param {string} name logger unique name
   * @param {LoggerType} [loggerType]
   * @memberof LoggerFactory
   */
  constructor(name: string, loggerType?: LoggerType) {
    switch (loggerType) {
      case LoggerType.PINO: {
        this.logger = new PinoLogger(name);
        break;
      }
      case LoggerType.WINSTON: {
        this.logger = new WinstonLogger(name);
        break;
      }
      default: {
        this.logger = new PinoLogger(name);
      }
    }
  }

  /**
   * Logs an information message
   *
   * @param {string} message
   * @param {*} [context]
   * @memberof LoggerFactory
   */
  info(message: string, context?: any): void {
    this.logger.info(message, { context });
  }

  /**
   * Logs a debug message
   *
   * @param {string} message
   * @param {*} [context]
   * @memberof LoggerFactory
   */
  debug(message: string, context?: any): void {
    this.logger.debug(message, { context });
  }

  /**
   * Logs a warning message
   *
   * @param {string} message
   * @param {*} [context]
   * @memberof LoggerFactory
   */
  warn(message: string, context?: any): void {
    this.logger.warn(message, { context });
  }

  /**
   * Logs an error message
   *
   * @param {string} message
   * @param {*} [trace]
   * @param {*} [context]
   * @memberof LoggerFactory
   */
  error(message: string, trace?: any, context?: any): void {
    this.logger.error(message, trace, { context });
  }

  /**
   * Logs a fatal message
   *
   * @param {string} message
   * @param {*} [trace]
   * @param {*} [context]
   * @memberof LoggerFactory
   */
  fatal(message: string, trace?: any, context?: any): void {
    this.logger.fatal(message, trace, { context });
  }
}
