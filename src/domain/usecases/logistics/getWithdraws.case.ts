import { UseCaseResponse } from "../../models";
import { LogisticsService, LogisticsStorage } from "../../repository";

let service: LogisticsService;
let storage: LogisticsStorage;

export async function useGetWithdraws(): Promise<UseCaseResponse> {
  try {
    const { error, data, message } = await service.getWithdraws();
    if (error) throw new Error(message);
    await storage.setWithdraws(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
