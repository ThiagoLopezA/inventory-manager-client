import { Item, Store, UseCaseResponse } from "../../models";
import { StoreService, StoreStorage } from "../../repository";

let service: StoreService;
let storage: StoreStorage;

export async function addToInventoryUseCase(
  store: Store,
  item: Item
): Promise<UseCaseResponse> {
  try {
    const response = await service.addItem(store, item);
    if (response.error) throw new Error(response.message);
    const updated = await service.getItems(store);
    if (updated.error) throw new Error(updated.message);
    await storage.updateInventory(updated.data);
    return { success: true, data: updated.data };
  } catch (error: any) {
    console.log(error);
    return { success: error, error: error.message };
  }
}
