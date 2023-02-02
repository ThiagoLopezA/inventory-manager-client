import { UseCaseResponse } from "../../models";
import { LogisticsService } from "../../repository";

let service: LogisticsService;

export async function getWithdrawUseCase(id: number): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.getWithdraw(id);
    if (error) throw new Error(message);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.messsage };
  }
}
