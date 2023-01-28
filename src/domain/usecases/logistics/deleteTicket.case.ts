import { NotificationService } from "../../repository";
import {
  LogisticsService,
  LogisticsStorageService,
} from "../../repository/logistics.repository";

let service: LogisticsService;
let storage: LogisticsStorageService;
let notification: NotificationService;

export function useDestroyTicket() {
  async function destroy(id: number) {
    const { error, message } = await service.deleteTicket(id);
    if (error) {
      notification.error(message);
    } else {
      await storage.removeTicket(id);
      notification.success(message);
    }
  }

  return { destroy };
}
