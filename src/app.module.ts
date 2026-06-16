import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import 'dotenv/config';
import { User } from './users/user.entity';
import { Service } from './services/service.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';
import { PublicController } from './public/public.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ?? 'localhost',
      port: Number(process.env.DB_PORT) ?? 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Service],
      synchronize: true,
  }),
    UsersModule,
    AuthModule,
    ServicesModule],
  controllers: [AppController, PublicController],
  providers: [AppService],
})
export class AppModule {}
