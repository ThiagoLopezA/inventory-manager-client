import { Item, Store } from "../../models";
import {
  InventoryService,
  NotificationService,
  StoreStorageService,
} from "../../repository";

let service: InventoryService;
let notification: NotificationService;
let storage: StoreStorageService;

export function useRemoveFromInventory() {
  async function removeFromInventory(store: Store, item: Item) {
    const { error, message } = await service.removeItem(store, item);
    if (error) {
      notification.error(message);
    } else {
      await storage.refreshStore();
      notification.success(message);
    }
  }

  return { removeFromInventory };
}
