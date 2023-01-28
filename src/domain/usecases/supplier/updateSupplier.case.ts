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
    const { error, message } = await service.update(supplier);
    if (error) {
      notification.error(message);
    } else {
      await storage.updateSupplier(supplier);
      notification.success(message);
    }
  }

  return { update };
}
