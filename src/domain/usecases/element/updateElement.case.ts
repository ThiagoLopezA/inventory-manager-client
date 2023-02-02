import { Element, UseCaseResponse } from "../../models";
import { ElementService, ElementStorage } from "../../repository";

let service: ElementService;
let storage: ElementStorage;

export async function updateElementUseCase(
  element: Element
): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.update(element);
    if (error) throw new Error(message);
    await storage.updateElement(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
