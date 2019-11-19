import { LoggerInterface } from './helper/logger2';

export default class MyCustomLogger implements LoggerInterface {
  constructor(private readonly name: string) {}

  info(message: string, ctx: any = {}) {
    console.info(`[${new Date()}] [INFO] [${this.name}] ${message}`, ctx);
  }
  debug(...args: any[]) {
    console.debug(`[${new Date()}] [DEBUG] [${this.name}]`, ...args);
  }
  warn(message: string, ctx: any = {}) {
    console.warn(`[${new Date()}] [WARN] [${this.name}] ${message}`, ctx);
  }
  error(message: string, trace: any = {}, ctx: any = {}) {
    console.error(
      `[${new Date()}] [ERROR] [${this.name}] ${message}`,
      trace,
      ctx
    );
  }
  fatal(...args: any[]) {
    console.error(`[${new Date()}] [FATAL] [${this.name}]`, ...args);
  }
}
