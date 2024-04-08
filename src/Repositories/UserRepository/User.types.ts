import {User} from "../../Entities/User";
import {Response} from 'express'

export interface IUserRepository {
  createUser(data: typeof User.arguments): void;

  findUser(type: string, value: string): Promise<User>;

  getUsers(): Promise<User[]>;

  updateUser(username: string, data: User): void;

  deleteUser(username: string): Promise<boolean>;
}