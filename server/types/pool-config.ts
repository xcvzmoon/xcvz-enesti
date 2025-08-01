import * as z from 'zod/v4';

export const poolConfigSchema = z.object({
  host: z.optional(z.string()),
  port: z.number().transform((val) => Number(val)),
  database: z.optional(z.string()),
  user: z.optional(z.string()),
  password: z.optional(z.string()),
});
