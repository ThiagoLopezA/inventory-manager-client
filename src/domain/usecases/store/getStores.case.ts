import { UseCaseResponse } from "../../models";
import { StoreService, StoresStorage } from "../../repository";

let service: StoreService;
let storage: StoresStorage;

export async function getStoresUseCase(): Promise<UseCaseResponse> {
  try {
    const { error, data, message } = await service.findAll();
    if (error) throw new Error(message);
    await storage.setStores(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
