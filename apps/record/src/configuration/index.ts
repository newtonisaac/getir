import { LogLevel } from '@nestjs/common';

export default () => ({
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT,
  main: {
    logger: process.env.LOGGER?.split(',') as LogLevel[],
  },
  mongo: { connection: process.env.MONGO_CONNECTION },
});
