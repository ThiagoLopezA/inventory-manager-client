import { ServiceResponse, Email, User } from "../models";

export interface UsersStorageService {
  addUser(user: User): Promise<boolean>;
  removeUser(id: number): Promise<boolean>;
  updateUser(user: User): Promise<boolean>;
  getUsers(): Promise<User[]>;
  setUsers(users: User[]): void;
}

export interface UserStorageService {
  user(): Promise<User>;
  setUser(user: User): Promise<User>;
  removeUser(): void;
}

export interface AuthenticationService {
  login(email: Email, password: string): Promise<User>;
}

export interface UsersService {
  create(user: User): Promise<ServiceResponse>;
  delete(id: number): Promise<ServiceResponse>;
  update(user: User): Promise<ServiceResponse>;
  findAll(): Promise<ServiceResponse>;
  findOne(id: number): Promise<ServiceResponse>;
}
