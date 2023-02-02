import { UseCaseResponse } from "../../models";
import { UsersService, UsersStorage } from "../../repository";

let service: UsersService;
let storage: UsersStorage;

export async function destroyUserUseCase(id: number): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.delete(id);
    if (error) throw new Error(message);
    await storage.removeUser(id);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
