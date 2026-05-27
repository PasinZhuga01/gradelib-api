import '@common/setup/env.setup';

import { cleanupOpenApiDoc, ZodValidationPipe } from 'nestjs-zod';

import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import { ResponseInterceptor } from '@common/interceptors/response.interceptor';
import config from '@config/app.config';
import swaggerConfig from '@config/swagger.config';

import { AppModule } from './app.module';

function generateLocalHostUrl(port: number, path: string = ''): string {
  return `http://localhost:${port}${path.length > 0 ? '/' : ''}${path}`;
}

async function logStartup(): Promise<void> {
  console.log();

  if (config.isProduction) {
    console.log(`✅ Application started successfully`);
    console.log(`✅ Environment: ${config.nodeEnv}`);
    console.log(`✅ CORS: ${config.cors.origins}`);
  } else {
    console.log(`✅ Application is running on: ${generateLocalHostUrl(config.port)}`);
    console.log(`✅ Environment: ${config.nodeEnv}`);
    console.log(`✅ CORS: ${config.cors.origins}`);
    console.log(`✅ Swagger docs: ${generateLocalHostUrl(config.port, config.docs.path)}`);
    console.log(`✅ Swagger docs json: ${generateLocalHostUrl(config.port, config.docs.jsonPath)}`);
    console.log(`✅ pgAdmin: ${generateLocalHostUrl(config.pgAdmin.port)}`);
  }

  console.log();
}

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ZodValidationPipe());

  app.useGlobalInterceptors(new ResponseInterceptor());

  app.enableCors({ origin: config.cors.origins, credentials: true });

  app.setGlobalPrefix(config.apiPrefix);

  const document = cleanupOpenApiDoc(SwaggerModule.createDocument(app, swaggerConfig));

  SwaggerModule.setup(config.docs.path, app, document);

  await app.listen(config.port);
  await logStartup();
}

bootstrap();
