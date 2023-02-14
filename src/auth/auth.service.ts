import { Injectable } from '@nestjs/common';
import { UserResgisterDto } from './dto/user.register.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async register(data: UserResgisterDto): Promise<void> {
    try {
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(data.password, salt)
      await this.userRepository.register(data.email, data.name, hashPassword);
    } catch(error) {
      return error
    }
  }
}
