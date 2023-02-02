import { Element, UseCaseResponse } from "../../models";
import { ElementService, ElementStorage } from "../../repository";

let service: ElementService;
let storage: ElementStorage;

export async function createElementUseCase(
  element: Element
): Promise<UseCaseResponse> {
  try {
    const { message, error, data } = await service.create(element);
    if (error) throw new Error(message);
    await storage.addElement(element);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
