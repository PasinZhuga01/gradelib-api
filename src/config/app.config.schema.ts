import { z } from 'zod';

export default z.object({
  nodeEnv: z.enum(['development', 'production']),
  port: z.number(),

  orm: z.object({
    type: z.literal('postgres'),
    synchronize: z.literal(false),

    host: z.string(),
    port: z.number(),
    username: z.string(),
    password: z.string(),
    database: z.string(),
  }),
});
