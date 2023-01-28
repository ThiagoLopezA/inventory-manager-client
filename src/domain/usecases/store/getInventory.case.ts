import { Store } from "../../models";
import {
  InventoryService,
  NotificationService,
  StoreStorageService,
} from "../../repository";

let service: InventoryService;
let notification: NotificationService;
let storage: StoreStorageService;

export function useGetInventory() {
  async function getInventory(store: Store) {
    const { error, data, message } = await service.getItems(store);
    if (error) {
      notification.error(message);
    } else {
      await storage.refreshStore();
      notification.success(message);
    }
  }

  return { getInventory };
}
