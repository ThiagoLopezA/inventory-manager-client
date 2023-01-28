import { Request } from "../../models";
import {
  NotificationService,
  RequestsService,
  RequestsStorageService,
} from "../../repository";

let service: RequestsService;
let notification: NotificationService;
let storage: RequestsStorageService;

export function useUpdateRequest() {
  async function update(request: Request) {
    const { error, message } = await service.update(request);
    if (error) {
      notification.error(message);
    } else {
      await storage.updateRequest(request);
      notification.success(message);
    }
  }

  return { update };
}
