import { ServiceResponse, Email, User } from "../models";

export interface UsersStorage {
  users: User[] | undefined;

  addUser(user: User): Promise<void>;
  removeUser(id: number): Promise<void>;
  updateUser(user: User): Promise<void>;
  setUsers(users: User[]): void;
}

export interface UserStorage {
  user: User;

  setUser(user: User): Promise<User>;
  updateUser(user: User): Promise<User>;
  removeUser(): void;
}

export interface AuthenticationService {
  login(email: Email, password: string): Promise<ServiceResponse>;
}

export interface UsersService {
  create(user: User): Promise<ServiceResponse>;
  delete(id: number): Promise<ServiceResponse>;
  update(user: User): Promise<ServiceResponse>;
  findAll(): Promise<ServiceResponse>;
  findOne(id: number): Promise<ServiceResponse>;
}
