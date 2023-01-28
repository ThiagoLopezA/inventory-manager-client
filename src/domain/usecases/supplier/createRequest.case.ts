import { Request } from "../../models";
import {
  NotificationService,
  RequestsService,
  RequestsStorageService,
} from "../../repository";

let service: RequestsService;
let storage: RequestsStorageService;
let notification: NotificationService;

export function useCreateRequest() {
  async function create(request: Request) {
    const { error, message } = await service.create(request);
    if (error) {
      notification.error(message);
    } else {
      await storage.addRequest(request);
      notification.success(message);
    }
  }

  return { create };
}
