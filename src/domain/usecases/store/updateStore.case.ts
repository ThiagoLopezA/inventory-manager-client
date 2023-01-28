import { Store } from "../../models";
import {
  NotificationService,
  StoreService,
  StoreStorageService,
} from "../../repository";

let service: StoreService;
let notification: NotificationService;
let storage: StoreStorageService;

export function useUpdateStore() {
  async function update(store: Store) {
    const { error, message } = await service.update(store);
    if (error) {
      notification.error(message);
    } else {
      await storage.updateStore(store);
      notification.success(message);
    }
  }

  return { update };
}
