import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcryptjs';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { UserService } from 'src/user/user.service';


interface RegisterDto {
    username: string,
    password: string,
    role: string
}

@Controller('auth')
export class AuthController {
    // private users = [];
    constructor(private readonly authService: AuthService, private readonly userService: UserService) {}


    @Post('register')
    async register(@Body() registerDto: RegisterDto) {
        const newUser = await this.userService.createUser(
            registerDto.username,
            registerDto.password,
            registerDto.role
        )

        return { message: 'User register successfully', user: newUser};
    }



  @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    const user = await this.authService.validateUser(
      loginDto.username,
      loginDto.password,
    );
    if (user) {
      return this.authService.login(user);
    }
    return { message: 'Invalid credentials' };
  }


  @Get('admin-data') 
  @UseGuards(RolesGuard)
  @Roles('admin')
  getAdminData() {
    return { data: "This is admin data"}
  }
}
