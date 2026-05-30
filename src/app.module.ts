import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RequestContextMiddleware } from '@common/middlewares/request-context.middleware';
import config from '@config/app.config';
import { RedisModule } from '@modules/redis/redis.module';
import { SystemModule } from '@modules/system/system.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config.orm,
      autoLoadEntities: true,
    }),
    RedisModule,
    SystemModule,
  ],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestContextMiddleware).forRoutes('*path');
  }
}
