import { NotificationService } from "../../repository";
import {
  LogisticsService,
  LogisticsStorageService,
} from "../../repository/logistics.repository";

let service: LogisticsService;
let storage: LogisticsStorageService;
let notification: NotificationService;

export function useGetWithdraws() {
  async function getAll() {
    const { error, data, message } = await service.getWithdraws();
    if (error) {
      notification.error(message);
    } else {
      await storage.setWithdraws(data);
      notification.success(message);
    }
  }

  return { getAll };
}
