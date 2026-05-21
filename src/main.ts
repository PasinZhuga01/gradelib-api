import '@common/setup/env.setup';

import config from '@config/app.config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.port);
}

bootstrap();
