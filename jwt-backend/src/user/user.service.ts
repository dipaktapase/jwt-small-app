import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

export interface User {
    id: number;
    username: string;
    password: string;
    role: string;
  }

@Injectable()
export class UserService {
    private users: User[] = []

    async createUser(username: string, password: string, role: string): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser: User = {
            id: this.users.length + 1,
            username,
            password: hashedPassword,
            role,
        }

        this.users.push(newUser);
        return newUser;
    }

    async findByUsername(username: string): Promise <User | undefined> {
        return this.users.find(user => user.username === username);
    }

    async validateUser(username: string, pass: string): Promise <any> {
        const user = await this.findByUsername(username);
        if (user && (await bcrypt.compare(pass, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

}
