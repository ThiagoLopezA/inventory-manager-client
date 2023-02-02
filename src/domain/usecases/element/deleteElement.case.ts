import { UseCaseResponse } from "../../models";
import { ElementService, ElementStorage } from "../../repository";

let service: ElementService;
let storage: ElementStorage;

export async function destroyElementUseCase(
  id: number
): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.delete(id);
    if (error) throw new Error(message);
    storage.removeElement(id);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
