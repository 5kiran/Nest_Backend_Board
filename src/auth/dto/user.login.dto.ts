import { PickType } from '@nestjs/mapped-types';
import { UserResgisterDto } from './user.register.dto';

export class UserLoginDto extends PickType(UserResgisterDto, [
  'email',
  'password',
] as const) {}
