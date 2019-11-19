import { LoggerInterface } from './logger.interface';

export function LoggerFactory<T extends LoggerInterface>(
  name: string,
  logger: { new (name: string): T }
) {
  return new logger(name);
}
