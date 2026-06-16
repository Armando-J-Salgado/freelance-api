import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async findById(id:number): Promise<User> {
        const user = await this.userRepository.findOne({where: {id}});
        if (!user) {
            throw new NotFoundException(`User with the id ${id} was not found`)
        }
        return user;
    }
}
