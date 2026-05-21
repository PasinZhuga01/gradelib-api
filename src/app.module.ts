import config from '@config/app.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config.orm,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
