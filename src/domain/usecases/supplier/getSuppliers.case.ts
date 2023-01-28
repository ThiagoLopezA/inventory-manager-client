import {
  NotificationService,
  SuppliersService,
  SuppliersStorageService,
} from "../../repository";

let service: SuppliersService;
let notification: NotificationService;
let storage: SuppliersStorageService;

export function useGetSuppliers() {
  async function getAll() {
    const { error, data, message } = await service.findAll();
    if (error) {
      notification.error(message);
    } else {
      notification.success(message);
      await storage.setSuppliers(data);
    }
  }

  return { getAll };
}
