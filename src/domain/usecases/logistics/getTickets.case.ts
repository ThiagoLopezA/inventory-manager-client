import { NotificationService } from "../../repository";
import {
  LogisticsService,
  LogisticsStorageService,
} from "../../repository/logistics.repository";

let service: LogisticsService;
let storage: LogisticsStorageService;
let notification: NotificationService;

export function useGetTickets() {
  async function getAll() {
    const { error, data, message } = await service.getTickets();
    if (error) {
      notification.error(message);
    } else {
      await storage.setTickets(data);
      notification.success(message);
    }
  }

  return { getAll };
}
