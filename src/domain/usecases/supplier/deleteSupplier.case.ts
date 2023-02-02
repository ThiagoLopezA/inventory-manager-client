import { SuppliersService, SuppliersStorage } from "../../repository";

let service: SuppliersService;
let storage: SuppliersStorage;

export async function destroySupplierUseCase(id: number) {
  try {
    const { error, message, data } = await service.delete(id);
    if (error) throw new Error(message);
    await storage.removeSupplier(id);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
