import { z } from 'zod';

export default z.object({
  nodeEnv: z.enum(['development', 'production']),
  port: z.number(),

  clientUrl: z.string().min(1),
  assetsUrl: z.string().min(1),

  mail: z.object({
    from: z.email(),
  }),

  pgAdmin: z.object({
    email: z.email(),
    password: z.string(),
    port: z.number(),
  }),

  redis: z.object({
    host: z.string().min(1),
    port: z.number().int().positive(),
    password: z.string().min(1),
  }),

  mailpit: z.object({
    host: z.string().min(1),
    ports: z.object({
      smtp: z.number().int().positive(),
      web: z.number().int().positive(),
    }),
  }),

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
