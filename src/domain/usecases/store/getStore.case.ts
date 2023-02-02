import { UseCaseResponse } from "../../models";
import { StoreService } from "../../repository";

let service: StoreService;

export async function getStoreUseCase(id: number): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.findOne(id);
    if (error) throw new Error(message);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
