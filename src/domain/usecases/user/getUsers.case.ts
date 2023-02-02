import { UseCaseResponse } from "../../models";
import { UsersService, UsersStorage } from "../../repository";

let service: UsersService;
let storage: UsersStorage;

export async function getUsersUseCase(): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.findAll();
    if (error) throw new Error(message);
    storage.setUsers(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
