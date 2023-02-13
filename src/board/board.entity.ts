import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { BoardStatus } from './enum/board.status.enum.';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  password: string;

  @Column()
  status: BoardStatus;
}
