import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/createboards.dto';
import { UpdateBoardDto } from './dto/updateboards.dto';

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(private dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }

  async getBoardById(id: number): Promise<Board> {
    const find = await this.findOne({ where: { id } });
    return find;
  }

  async getAllBoards(): Promise<Board[]> {
    const find = await this.find();
    return find;
  }

  async createBoard(data: CreateBoardDto): Promise<Board> {
    const create = await this.save(data);
    return create;
  }

  async updateBoard(id: number, data: UpdateBoardDto): Promise<void> {
    await this.update(id, data);
  }

  async deleteBoard(id:number) : Promise<void> {
    await this.delete({id})
  }
}
