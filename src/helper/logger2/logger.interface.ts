export interface LoggerInterface {
  info(message: string, context?: any): void;
  debug(message: string, context?: any): void;
  warn(message: string, context?: any): void;
  error(message: string, trace?: any, context?: any): void;
  fatal(message: string, trace?: any, context?: any): void;
}
