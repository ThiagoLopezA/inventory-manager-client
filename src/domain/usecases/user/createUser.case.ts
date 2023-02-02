import { UseCaseResponse, User } from "../../models";
import { UsersService, UsersStorage } from "../../repository";

let service: UsersService;
let storage: UsersStorage;

export async function createUserUseCase(user: User): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.create(user);
    if (error) throw new Error(message);
    await storage.addUser(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
