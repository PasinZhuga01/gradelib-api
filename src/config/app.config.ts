import configSchema from './app.config.schema';

const config = configSchema.parse({
  nodeEnv: process.env['NODE_ENV'],
  port: Number(process.env['PORT']),

  cors: {
    origins: (process.env['CORS_ORIGINS'] ?? '')
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean),
  },

  pgAdmin: {
    email: process.env['PGADMIN_EMAIL'],
    password: process.env['PGADMIN_PASSWORD'],
    port: Number(process.env['PGADMIN_PORT']),
  },

  orm: {
    type: 'postgres',
    synchronize: false,

    host: process.env['DATABASE_HOST'],
    port: Number(process.env['DATABASE_PORT']),
    username: process.env['DATABASE_USERNAME'],
    password: process.env['DATABASE_PASSWORD'],
    database: process.env['DATABASE_NAME'],
  },
});

const isProduction = config.nodeEnv === 'production';

const apiPrefix = 'api';

const docsPath = `${apiPrefix}/docs`;
const docsJsonPath = `${docsPath}-json`;
const docs = { path: docsPath, jsonPath: docsJsonPath };

export default { ...config, isProduction, apiPrefix, docs };
