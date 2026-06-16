import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './service.entity';
import { UsersModule } from 'src/users/users.module';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { User } from 'src/users/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Service, User]), UsersModule],
    controllers: [ServicesController],
    providers: [ServicesService],
    exports: [ServicesService]
})
export class ServicesModule {}
