import '@common/setup/env.setup';

import config from '@config/app.config';
import swaggerConfig from '@config/swagger.config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api/docs', app, document);

  await app.listen(config.port);
}

bootstrap();
