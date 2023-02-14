import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class UserResgisterDto {
  @IsString()
  // @Matches(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/, {
  //   message: 'email형식이 올바르지 않습니다.',
  // })
  readonly email: string;

  @IsString()
  @MinLength(1, { message: 'name은 최소 1글자 입니다.' })
  @MaxLength(7, { message: 'name은 최대 7글자 입니다.' })
  readonly name: string;

  @IsString()
  // @Matches(/(?=.*[0-9])(?=.*[a-z])(?=.*\W)(?=\S+$).{8,20}/, {
  //   message: '패스워드 형식이 올바르지 않습니다.',
  // })
  readonly password: string;
}
