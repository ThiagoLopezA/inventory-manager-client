import {
  ElementService,
  ElementStorageService,
  NotificationService,
} from "../../repository";

let service: ElementService;
let storage: ElementStorageService;
let notification: NotificationService;

export function useGetElements() {
  async function getAll() {
    const { error, message, data } = await service.getAll();
    if (error) {
      notification.error(message);
    } else {
      await storage.setElements(data);
      notification.success(message);
    }
  }

  return { getAll };
}
