import { Store, UseCaseResponse } from "../../models";
import { StoreService, StoreStorage } from "../../repository";

let service: StoreService;
let storage: StoreStorage;

export async function getInventoryUseCase(
  store: Store
): Promise<UseCaseResponse> {
  try {
    const { error, data, message } = await service.getItems(store);
    if (error) throw new Error(message);
    await storage.updateInventory(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
