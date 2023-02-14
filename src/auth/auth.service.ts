import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserResgisterDto } from './dto/user.register.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { UserLoginDto } from './dto/user.login.dto';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async register(data: UserResgisterDto): Promise<string> {
    try {
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(data.password, salt);
      await this.userRepository.register(data.email, data.name, hashPassword);
      return '회원가입 완료';
    } catch (error) {
      return error;
    }
  }

  async login(data: UserLoginDto): Promise<{ accessToken: string }> {
    try {
      const findUser = await this.userRepository.findOneUser(data);
      const checkPassword = await bcrypt.compare(
        data.password,
        findUser.password,
      );
      if (!checkPassword) {
        throw new UnauthorizedException('email 또는 password를 확인해주세요.');
      }

      //유저 토큰 생성 (secret + payload)
      const payload = { id: findUser.id, name: findUser.name };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } catch (error) {
      return error;
    }
  }
}
