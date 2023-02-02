import { UseCaseResponse } from "../../models";
import { ElementService, ElementStorage } from "../../repository";

let service: ElementService;
let storage: ElementStorage;

export async function getElementsUseCase(): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.getAll();
    if (error) throw new Error(message);
    await storage.setElements(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
