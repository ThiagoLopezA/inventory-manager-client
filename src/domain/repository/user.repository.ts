import { ApiResponse, Email, User } from "../models";

export interface UsersStorageService {
  addUser(user: User): Promise<boolean>;
  removeUser(user: User): Promise<boolean>;
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
  create(user: User): Promise<ApiResponse>;
  delete(user: User): Promise<ApiResponse>;
  update(user: User): Promise<ApiResponse>;
  findAll(): Promise<ApiResponse>;
  findOne(id: string): Promise<ApiResponse>;
}
