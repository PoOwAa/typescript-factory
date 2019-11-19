import * as winston from 'winston';

import LoggerInterface from './logger.interface';

export default class WinstonLogger implements LoggerInterface {
  private readonly logger: winston.Logger;
  private readonly errorLogger: winston.Logger;

  constructor(name: string) {
    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.simple(),
      defaultMeta: { service: name },
      transports: [new winston.transports.Console()]
    });

    this.errorLogger = winston.createLogger({
      level: "warn",
      format: winston.format.simple(),
      defaultMeta: { service: name },
      transports: [new winston.transports.Console()]
    });
  }

  /**
   * Logs an information message
   *
   * @param {string} message
   * @param {*} [context]
   * @memberof WinstonLogger
   */
  info(message: string, context?: any): void {
    this.logger.info(message, { context });
  }

  /**
   * Logs a debug message
   *
   * @param {string} message
   * @param {*} [context]
   * @memberof WinstonLogger
   */
  debug(message: string, context?: any): void {
    this.logger.debug(message, { context });
  }

  /**
   * Logs a warning message
   *
   * @param {string} message
   * @param {*} [context]
   * @memberof WinstonLogger
   */
  warn(message: string, context?: any): void {
    this.errorLogger.warn(message, { context });
  }

  /**
   * Logs an error message
   *
   * @param {string} message
   * @param {*} [trace]
   * @param {*} [context]
   * @memberof WinstonLogger
   */
  error(message: string, trace?: any, context?: any): void {
    this.errorLogger.error(message, trace, { context });
  }

  /**
   * Logs a fatal message
   *
   * @param {string} message
   * @param {*} [trace]
   * @param {*} [context]
   * @memberof WinstonLogger
   */
  fatal(message: string, trace?: any, context?: any): void {
    this.errorLogger.error(message, trace, { context });
  }
}
