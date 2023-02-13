import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../enum/board.status.enum.';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly statusOption = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];
  transform(value: any) {
    const valueStatus: BoardStatus = value.status;
    if (this.valueStatusValid(valueStatus)) {
      throw new BadRequestException(`status 입력값이 잘못되었습니다.`);
    }
    return value;
  }

  private valueStatusValid(status: BoardStatus) {
    const index = this.statusOption.indexOf(status);
    return index === -1;
  }
}
