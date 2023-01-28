import {
  NotificationService,
  RequestsService,
  RequestsStorageService,
} from "../../repository";

let service: RequestsService;
let notification: NotificationService;
let storage: RequestsStorageService;

export function useGetSuppliers() {
  async function getAll(options?: object) {
    const { error, data, message } = await service.findAll(
      options ? options : undefined
    );
    if (error) {
      notification.error(message);
    } else {
      notification.success(message);
      await storage.setRequests(data);
    }
  }

  return { getAll };
}
