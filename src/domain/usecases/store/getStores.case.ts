import {
  NotificationService,
  StoreService,
  StoreStorageService,
} from "../../repository";

let service: StoreService;
let notification: NotificationService;
let storage: StoreStorageService;

export function useGetStores() {
  async function getAll() {
    const { error, data, message } = await service.findAll();
    if (error) {
      notification.error(message);
    } else {
      notification.success(message);
      await storage.setStores(data);
    }
  }

  return { getAll };
}
