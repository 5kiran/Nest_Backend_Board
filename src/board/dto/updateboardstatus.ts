import { PickType } from '@nestjs/mapped-types';
import { CreateBoardDto } from './createboards.dto';

export class UpdateBoardStatusDto extends PickType(CreateBoardDto, [
  'status',
] as const) {}