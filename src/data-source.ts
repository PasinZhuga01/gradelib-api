import '@common/setup/env.setup';

import config from '@config/app.config';
import { DataSource } from 'typeorm';

const { orm, isProduction } = config;

const source = isProduction ? 'dist' : 'src';
const sourceFilesExtension = isProduction ? 'js' : 'ts';

export default new DataSource({
  ...orm,

  entities: [`${source}/**/*.entity.${sourceFilesExtension}`],
  migrations: [`${source}/migrations/*.${sourceFilesExtension}`],
});
