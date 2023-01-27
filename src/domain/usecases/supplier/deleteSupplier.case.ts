import {
  NotificationService,
  SuppliersService,
  SuppliersStorageService,
} from "../../repository";

let service: SuppliersService;
let notification: NotificationService;
let storage: SuppliersStorageService;

export function useDestroySupplier() {
  async function destroy(id: number) {
    const { code } = await service.delete(id);
    if (code !== 200) return notification.error("Error");
    await storage.removeSupplier(id);
    return notification.success("Exito");
  }
  return { destroy };
}
