import { UseCaseResponse } from "../../models";
import { LogisticsService, LogisticsStorage } from "../../repository";

let service: LogisticsService;
let storage: LogisticsStorage;

export async function useDestroyWithdraw(id: number): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.deleteWithdraw(id);
    if (error) throw new Error(message);
    await storage.removeWithdraw(id);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
