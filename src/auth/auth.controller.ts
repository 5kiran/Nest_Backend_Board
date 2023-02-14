import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user.login.dto';
import { UserResgisterDto } from './dto/user.register.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() data: UserResgisterDto): Promise<string> {
    try {
      const register = this.authService.register(data);
      return register;
    } catch (error) {
      return error;
    }
  }

  @Post('/login')
  login(@Body() data: UserLoginDto): Promise<{ accessToken: string }> {
    try {
      const login = this.authService.login(data);
      return login;
    } catch (error) {
      return error;
    }
  }
}
