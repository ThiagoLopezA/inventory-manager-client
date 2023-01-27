import { Supplier } from "../../models";
import {
  NotificationService,
  SuppliersService,
  SuppliersStorageService,
} from "../../repository";

let service: SuppliersService;
let notification: NotificationService;
let storage: SuppliersStorageService;

export function useCreateSupplier() {
  async function create(supplier: Supplier) {
    const { code } = await service.create(supplier);
    if (code !== 201) return notification.error("Error");
    await storage.addSupplier(supplier);
    return notification.success("Exito");
  }

  return { create };
}
