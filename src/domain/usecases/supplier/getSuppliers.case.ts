import { UseCaseResponse } from "../../models";
import { SuppliersService, SuppliersStorage } from "../../repository";

let service: SuppliersService;
let storage: SuppliersStorage;

export async function getAllSuppliersUseCase(): Promise<UseCaseResponse> {
  try {
    const { error, data, message } = await service.findAll();
    if (error) throw new Error(message);
    await storage.setSuppliers(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
