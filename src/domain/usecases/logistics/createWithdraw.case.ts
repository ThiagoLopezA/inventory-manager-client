import { Store, Withdraw } from "../../models";
import { NotificationService } from "../../repository";
import {
  LogisticsService,
  LogisticsStorageService,
} from "../../repository/logistics.repository";

let service: LogisticsService;
let storage: LogisticsStorageService;
let notification: NotificationService;

export function useCreateWithdraw() {
  async function create(withdraw: Withdraw, store: Store) {
    const { error, message } = await service.createWithdraw(store, withdraw);
    if (error) {
      notification.error(message);
    } else {
      await storage.addWithdraw(withdraw);
      notification.success(message);
    }
  }

  return { create };
}
