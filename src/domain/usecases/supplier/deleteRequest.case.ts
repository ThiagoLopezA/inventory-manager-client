import {
  NotificationService,
  RequestsService,
  RequestsStorageService,
} from "../../repository";

let service: RequestsService;
let notification: NotificationService;
let storage: RequestsStorageService;

export function useDestroyRequest() {
  async function destroy(id: number) {
    const { error, message } = await service.delete(id);
    if (error) {
      notification.error(message);
    } else {
      await storage.removeRequest(id);
      notification.success(message);
    }
  }

  return { destroy };
}
