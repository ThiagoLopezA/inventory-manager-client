import { Item, Store, UseCaseResponse } from "../../models";
import { StoreService, StoreStorage } from "../../repository";

let service: StoreService;
let storage: StoreStorage;

export async function removeFromInventoryUseCase(
  store: Store,
  item: Item
): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.removeItem(store, item);
    if (error) throw new Error(message);
    const inventory = await service.getItems(store);
    if (inventory.error) throw new Error(message);
    await storage.updateInventory(inventory.data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
