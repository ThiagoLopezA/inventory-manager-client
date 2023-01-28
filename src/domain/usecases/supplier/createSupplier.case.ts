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
    const { error, message } = await service.create(supplier);
    if (error) {
      notification.error(message);
    } else {
      await storage.addSupplier(supplier);
      notification.success(message);
    }
  }

  return { create };
}
