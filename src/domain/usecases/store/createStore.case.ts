import { Store, UseCaseResponse } from "../../models";
import { StoreService, StoresStorage } from "../../repository";

let service: StoreService;
let storage: StoresStorage;

export async function createStoreUseCase(
  store: Store
): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.create(store);
    if (error) throw new Error(message);
    await storage.addStore(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
