import { IsString } from 'class-validator';

export class UserResgisterDto {
  @IsString()
  readonly email: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly password: string;
}