import {
  NotificationService,
  StoreService,
  StoreStorageService,
} from "../../repository";

let service: StoreService;
let notification: NotificationService;
let storage: StoreStorageService;

export function useDestroyStore() {
  async function destroy(id: number) {
    const { error, message } = await service.delete(id);
    if (error) {
      notification.error(message);
    } else {
      await storage.removeStore(id);
      notification.success(message);
    }
  }

  return { destroy };
}
