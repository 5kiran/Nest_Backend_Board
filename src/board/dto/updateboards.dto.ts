import { PickType } from '@nestjs/mapped-types';
import { CreateBoardDto } from './createboards.dto';

export class UpdateBoardDto extends PickType(CreateBoardDto, [
  'title',
  'content',
] as const) {}
