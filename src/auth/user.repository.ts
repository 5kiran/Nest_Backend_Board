import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import { DataSource, Repository } from 'typeorm';
import { UserResgisterDto } from './dto/user.register.dto';
import { User } from './user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async register(email, name, password): Promise<void> {
    try {
      const user = await this.create({ email, name, password });
      await this.save(user);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('이미 존재하는 이메일 입니다');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
