import { Request, UseCaseResponse } from "../../models";
import { RequestsService, RequestsStorage } from "../../repository";

let service: RequestsService;
let storage: RequestsStorage;

export async function createRequestUseCase(
  request: Request
): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.create(request);
    if (error) throw new Error(message);
    await storage.addRequest(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
