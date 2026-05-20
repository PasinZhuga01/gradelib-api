import './common/setup/env.setup';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import config from './config/app.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.port);
}

bootstrap();
