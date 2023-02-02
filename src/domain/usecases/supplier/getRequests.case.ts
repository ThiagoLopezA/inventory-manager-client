import { UseCaseResponse } from "../../models";
import { RequestsService, RequestsStorage } from "../../repository";

let service: RequestsService;
let storage: RequestsStorage;

export async function getSuppliersUseCase(
  options?: object
): Promise<UseCaseResponse> {
  try {
    const { error, data, message } = await service.findAll(
      options ? options : undefined
    );
    if (error) throw new Error(message);
    await storage.setRequests(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
