import { Store } from "../../models";
import { StoreService, StoreStorage } from "../../repository";

let service: StoreService;
let storage: StoreStorage;

export async function updateStoreUseCase(store: Store) {
  try {
    const { error, message, data } = await service.update(store);
    if (error) throw new Error(message);
    await storage.updateStore(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
