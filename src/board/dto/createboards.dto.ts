import { IsString } from 'class-validator';
import { BoardStatus } from '../enum/board.status.enum.';

export class CreateBoardDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsString()
  readonly status: BoardStatus;
}
