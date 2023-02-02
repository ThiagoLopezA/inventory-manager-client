import { UseCaseResponse, User } from "../../models";
import { UsersService, UsersStorage } from "../../repository";

let service: UsersService;
let storage: UsersStorage;

export async function updateUserUseCase(user: User): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.update(user);
    if (error) throw new Error(message);
    await storage.updateUser(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
