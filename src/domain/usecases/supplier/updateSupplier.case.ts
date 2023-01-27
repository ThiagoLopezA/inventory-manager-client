import { Supplier } from "../../models";
import {
  NotificationService,
  SuppliersService,
  SuppliersStorageService,
} from "../../repository";

let service: SuppliersService;
let notification: NotificationService;
let storage: SuppliersStorageService;

export function useUpdateSupplier() {
  async function update(supplier: Supplier) {
    const { code } = await service.update(supplier);
    if (code !== 200) notification.error("Error");
    await storage.updateSupplier(supplier);
    return notification.success("Exito");
  }

  return { update };
}
