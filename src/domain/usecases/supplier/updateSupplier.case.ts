import { Supplier } from "../../models";
import { SuppliersService, SuppliersStorage } from "../../repository";

let service: SuppliersService;
let storage: SuppliersStorage;

export async function updateSupplierUseCase(supplier: Supplier) {
  try {
    const { error, message, data } = await service.update(supplier);
    if (error) throw new Error(message);
    await storage.updateSupplier(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
