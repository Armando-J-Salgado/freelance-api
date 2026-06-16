import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './service.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ServicesService {
    constructor(
        @InjectRepository(Service)
        private serviceRepository: Repository<Service>,
        private userService: UsersService,
    ) {}

    async findAll() {
        return this.serviceRepository.find({relations: ['provider']});
    }

    async createService(title: string, category: string, description: string, price: number, providerId: number): Promise<Service> {
        const user = await this.userService.findById(providerId);
        if (!user) {
            throw new NotFoundException(`User not found`);
        }
        const newService = this.serviceRepository.create({title, category, description, price, provider: user});
        return this.serviceRepository.save(newService);
    }
}
