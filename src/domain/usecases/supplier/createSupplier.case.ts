import { Supplier, UseCaseResponse } from "../../models";
import { SuppliersService, SuppliersStorage } from "../../repository";

let service: SuppliersService;
let storage: SuppliersStorage;

export async function createSupplierUseCase(
  supplier: Supplier
): Promise<UseCaseResponse> {
  try {
    const { error, message, data } = await service.create(supplier);
    if (error) throw new Error(message);
    await storage.addSupplier(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
