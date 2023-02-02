import { Ticket, UseCaseResponse } from "../../models";
import {
  LogisticsService,
  LogisticsStorage,
} from "../../repository/logistics.repository";

let service: LogisticsService;
let storage: LogisticsStorage;

export async function createTicketUseCase(
  ticket: Ticket
): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.createTicket(ticket);
    if (error) throw new Error(message);
    await storage.addTicket(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
