import { Injectable, UnauthorizedException } from "@nestjs/common";
import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import { UsersService } from "src/users/users.service";
import 'dotenv/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.APP_SECRET ?? '',
        });
    }

    async validate(payload: any) {
        try {
            const user = await this.userService.findById(payload.sub);
            return {id: user.id, email: user.email, nombre: user.name};
        } catch {
            throw new UnauthorizedException('No se encontró el usuario')
        }
    }
}