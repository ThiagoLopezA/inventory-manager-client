import { NotificationService } from "../../repository";
import {
  LogisticsService,
  LogisticsStorageService,
} from "../../repository/logistics.repository";

let service: LogisticsService;
let storage: LogisticsStorageService;
let notification: NotificationService;

export function useDestroyWithdraw() {
  async function destroy(id: number) {
    const { error, message } = await service.deleteWithdraw(id);
    if (error) {
      notification.error(message);
    } else {
      await storage.removeWithdraw(id);
      notification.success(message);
    }
  }

  return { destroy };
}
