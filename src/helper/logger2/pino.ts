import Pino from 'pino';

import { LoggerInterface } from './logger.interface';

export class PinoLogger implements LoggerInterface {
  private readonly logger: Pino.Logger;
  private readonly errorLogger: Pino.Logger;

  constructor(name: string) {
    this.logger = Pino({
      name,
      level: "info",
      prettyPrint: {
        colorize: true,
        translateTime: true
      }
    });

    this.errorLogger = Pino(
      {
        name,
        level: "warn",
        prettyPrint: {
          colorize: true,
          translateTime: true
        }
      },
      process.stderr
    );
  }

  /**
   * Logs an information message
   *
   * @param {string} message
   * @param {*} [context]
   * @memberof PinoLogger
   */
  info(message: string, context?: any): void {
    this.logger.info(message, { context });
  }

  /**
   * Logs a debug message
   *
   * @param {string} message
   * @param {*} [context]
   * @memberof PinoLogger
   */
  debug(message: string, context?: any): void {
    this.logger.debug(message, { context });
  }

  /**
   * Logs a warning message
   *
   * @param {string} message
   * @param {*} [context]
   * @memberof PinoLogger
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
   * @memberof PinoLogger
   */
  error(message: string, trace?: any, context?: any): void {
    this.errorLogger.error(message, {
      context,
      trace
    });
  }

  /**
   * Logs a fatal message
   *
   * @param {string} message
   * @param {*} [trace]
   * @param {*} [context]
   * @memberof PinoLogger
   */
  fatal(message: string, trace?: any, context?: any): void {
    this.errorLogger.fatal(message, {
      context,
      trace
    });
  }
}
