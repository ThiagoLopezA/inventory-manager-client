import { UseCaseResponse } from "../../models";
import { RequestsService, RequestsStorage } from "../../repository";

let service: RequestsService;
let storage: RequestsStorage;

export async function destroyRequestUseCase(
  id: number
): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.delete(id);
    if (error) throw new Error(message);
    await storage.removeRequest(id);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
