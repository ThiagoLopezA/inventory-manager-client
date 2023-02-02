import { Ticket, UseCaseResponse } from "../../models";
import { LogisticsService, LogisticsStorage } from "../../repository";

let service: LogisticsService;
let storage: LogisticsStorage;

export async function updateTicketUseCase(
  ticket: Ticket
): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.updateTicket(ticket);
    if (error) throw new Error(message);
    await storage.updateTicket(ticket);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
