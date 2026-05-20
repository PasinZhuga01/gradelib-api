import { z } from 'zod';

export default z.object({
    nodeEnv: z.enum(['development', 'production']),
    port: z.number(),

    database: z.object({
        host: z.string(),
        port: z.number(),
        username: z.string(),
        password: z.string(),
        name: z.string()
    })
});