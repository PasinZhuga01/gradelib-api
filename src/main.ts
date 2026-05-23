import '@common/setup/env.setup';

import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import { ResponseInterceptor } from '@common/interceptors/response.interceptor';
import config from '@config/app.config';
import swaggerConfig from '@config/swagger.config';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, swaggerConfig);

  app.useGlobalInterceptors(new ResponseInterceptor());

  app.enableCors({ origin: config.cors.origins, credentials: true });

  SwaggerModule.setup('api/docs', app, document);

  await app.listen(config.port);
}

bootstrap();
