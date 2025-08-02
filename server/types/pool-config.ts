import * as z from 'zod/v4';

export const poolConfigSchema = z.object({
  host: z.string(),
  port: z.string().transform((val) => Number(val)),
  database: z.string(),
  user: z.string(),
  password: z.string(),
});
