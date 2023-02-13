import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { Board } from './board.entity';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/createboards.dto';
import { UpdateBoardDto } from './dto/updateboards.dto';
import { UpdateBoardStatusDto } from './dto/updateboardstatus';
import { BoardStatusValidationPipe } from './pipes/board-status-validation-pipe';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @Get('/')
  getAllBoards(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }

  @Post('/')
  createBoard(@Body(BoardStatusValidationPipe) data: CreateBoardDto) {
    return this.boardService.createBoard(data);
  }

  @Put('/:id')
  updateBoard(@Param('id') id: number, @Body() data: UpdateBoardDto) {
    return this.boardService.updateBoard(id, data);
  }

  @Put('status/:id')
  updateStatusBoard(
    @Param('id') id: number,
    @Body(BoardStatusValidationPipe) data: UpdateBoardStatusDto, // @Body(커스텀 파이프)
  ) {
    return this.boardService.updateStatusBoard(id, data);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: number) {
    return this.boardService.deleteBoard(id);
  }
}
