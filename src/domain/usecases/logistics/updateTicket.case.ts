import { Ticket } from "../../models";
import { NotificationService } from "../../repository";
import {
  LogisticsService,
  LogisticsStorageService,
} from "../../repository/logistics.repository";

let service: LogisticsService;
let storage: LogisticsStorageService;
let notification: NotificationService;

export function useUpdateTicket() {
  async function useUpdateTicket(ticket: Ticket) {
    const { error, message } = await service.updateTicket(ticket);
    if (error) {
      notification.error(message);
    } else {
      await storage.updateTicket(ticket);
      notification.success(message);
    }
  }
}
