import { poolConfigSchema } from '../types/pool-config';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

export const poolConfig = poolConfigSchema.parse({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

const pool = new Pool(poolConfig);

export const database = drizzle({ client: pool });
