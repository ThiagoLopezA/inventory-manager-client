import { Store } from "../../models";
import {
  NotificationService,
  StoreService,
  StoreStorageService,
} from "../../repository";

let service: StoreService;
let storage: StoreStorageService;
let notification: NotificationService;

export function useCreateStore() {
  async function create(store: Store) {
    const { error, message } = await service.create(store);
    if (error) {
      notification.error(message);
    } else {
      await storage.addStore(store);
      notification.success(message);
    }
  }

  return { create };
}
