import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { JwtStrategy } from './jwt.strategy';
import { RolesGuard } from './roles.guard';

@Module({
  imports: [PassportModule, JwtModule.register({
    secret: '1234',
    signOptions: { expiresIn: '1h'},
  })],
  providers: [AuthService, UserService, JwtStrategy, RolesGuard],
  controllers: [AuthController]
})
export class AuthModule {}
