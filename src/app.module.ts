import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RequestContextMiddleware } from '@common/middlewares/request-context.middleware';
import config from '@config/app.config';
import { SystemModule } from '@modules/system/system.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config.orm,
      autoLoadEntities: true,
    }),
    SystemModule,
  ],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestContextMiddleware).forRoutes('*');
  }
}
