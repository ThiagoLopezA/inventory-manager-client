import { UseCaseResponse } from "../../models";
import { RequestsService } from "../../repository";

let service: RequestsService;

export async function getSupplierUseCase(id: number): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.findOne(id);
    if (error) throw new Error(message);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
