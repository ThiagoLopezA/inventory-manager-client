import { Store, UseCaseResponse, Withdraw } from "../../models";
import { LogisticsService, LogisticsStorage } from "../../repository";

let service: LogisticsService;
let storage: LogisticsStorage;

export async function createWithdrawUseCase(
  withdraw: Withdraw,
  store: Store
): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.createWithdraw(
      store,
      withdraw
    );
    if (error) throw new Error(message);
    await storage.addWithdraw(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
