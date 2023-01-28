import { Item, Store } from "../../models";
import {
  InventoryService,
  NotificationService,
  StoreStorageService,
} from "../../repository";

let service: InventoryService;
let notification: NotificationService;
let storage: StoreStorageService;

export function useAddToInventory() {
  async function addItem(store: Store, item: Item) {
    const { error, message } = await service.addItem(store, item);
    if (error) {
      notification.error(message);
    } else {
      await storage.refreshStore();
      notification.success(message);
    }
  }

  return { addItem };
}
