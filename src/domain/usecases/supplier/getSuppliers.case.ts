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
    const { code, response } = await service.findAll();
    if (code !== 200) notification.error("Error");
    notification.success("Exito");
    storage.setSuppliers(response.data);
  }
  return { getAll };
}
