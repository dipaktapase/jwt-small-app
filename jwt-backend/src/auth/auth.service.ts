import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';


@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(username: string, password: string): Promise <any> {
        return this.userService.validateUser(username, password);
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id, role: user.role};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
