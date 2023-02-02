import { UseCaseResponse } from "../../models";
import { StoreService, StoresStorage } from "../../repository";

let service: StoreService;
let storage: StoresStorage;

export async function destroyStoreUseCase(
  id: number
): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.delete(id);
    if (error) throw new Error(message);
    await storage.removeStore(id);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
