import { UseCaseResponse } from "../../models";
import { LogisticsService, LogisticsStorage } from "../../repository";

let service: LogisticsService;
let storage: LogisticsStorage;

export async function destroyTicketUseCase(
  id: number
): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.deleteTicket(id);
    if (error) throw new Error(message);
    await storage.removeTicket(id);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
