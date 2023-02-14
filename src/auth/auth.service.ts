import { Injectable } from '@nestjs/common';
import { UserResgisterDto } from './dto/user.register.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async register(data: UserResgisterDto): Promise<void> {
    try {
      await this.userRepository.register(data);
    } catch(error) {
      return error
    }
  }
}
