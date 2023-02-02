import { UseCaseResponse } from "../../models";
import { LogisticsService, LogisticsStorage } from "../../repository";

let service: LogisticsService;
let storage: LogisticsStorage;

export async function getTicketsUseCase(): Promise<UseCaseResponse> {
  try {
    const { error, data, message } = await service.getTickets();
    if (error) throw new Error(message);
    await storage.setTickets(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
