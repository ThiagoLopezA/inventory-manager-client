import { UseCaseResponse } from "../../models";
import { ElementService } from "../../repository";

let service: ElementService;

export async function getElementUseCase(id: number): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.getOne(id);
    if (error) throw new Error(message);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
