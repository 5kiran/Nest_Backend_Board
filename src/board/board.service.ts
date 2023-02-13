import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import _ from 'lodash';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/createboards.dto';
import { UpdateBoardDto } from './dto/updateboards.dto';

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  async getBoardById(id: number): Promise<Board> {
    const find = await this.boardRepository.getBoardById(id);
    if (!find) {
      throw new NotFoundException('해당 게시글이 존재하지 않습니다.');
    }
    return find;
  }

  async getAllBoards(): Promise<Board[]> {
    const find = await this.boardRepository.getAllBoards();
    return find;
  }

  async createBoard(data: CreateBoardDto): Promise<Board> {
    const create = await this.boardRepository.createBoard(data);
    return create;
  }
  async updateBoard(id: number, data: UpdateBoardDto): Promise<void> {
    const find = await this.boardRepository.getBoardById(id);
    await this.boardRepository.updateBoard(id, data);
  }
  async updateStatusBoard(id, data) {
    const find = await this.boardRepository.getBoardById(id);
    await this.boardRepository.updateBoard(id, data)
  }

  async deleteBoard(id: number): Promise<void> {
    const find = await this.boardRepository.getBoardById(id);
    await this.boardRepository.deleteBoard(id);
  }
}
