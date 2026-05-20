import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from './config/app.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config.orm,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}