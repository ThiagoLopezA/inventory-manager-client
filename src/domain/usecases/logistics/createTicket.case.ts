import { Ticket } from "../../models";
import { NotificationService } from "../../repository";
import {
  LogisticsService,
  LogisticsStorageService,
} from "../../repository/logistics.repository";

let service: LogisticsService;
let storage: LogisticsStorageService;
let notification: NotificationService;

export function useCreateTicket() {
  async function create(ticket: Ticket) {
    const { error, message } = await service.createTicket(ticket);
    if (error) {
      notification.error(message);
    } else {
      await storage.addTicket(ticket);
      notification.success(message);
    }
  }

  return { create };
}
