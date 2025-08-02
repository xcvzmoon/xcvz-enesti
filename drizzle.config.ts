import { defineConfig } from 'drizzle-kit';
import { poolConfig } from './server/database/index';

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    host: poolConfig.host,
    port: poolConfig.port,
    database: poolConfig.database,
    user: poolConfig.user,
    password: poolConfig.password,
    ssl: false,
  },
  schema: './server/database/schemas/*.ts',
  out: './server/database/migrations',
});
