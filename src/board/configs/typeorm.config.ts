import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/auth/user.entity";
import { Board } from "../board.entity";

export const typeOrmConfig : TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'dog94',
  database: 'boardnest',
  entities: [__dirname + '/../**/*.entity.{js,ts}',Board, User],
  synchronize : true
}