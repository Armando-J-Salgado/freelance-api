import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) {}

    async validate(email: string, password: string) {
        const user = await this.userRepository.findOne({where: {email}});
        if(user && user.password == password) {
            return user;
        }

        return null;
    }

    login(user: Partial<User>) {
        const payload = {email: user.email, sub: user.id,};
        return {access_token: this.jwtService.sign(payload),};
    }

}
