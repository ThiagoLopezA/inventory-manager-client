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
    const { error, message } = await service.delete(id);
    if (error) {
      notification.error(message);
    } else {
      await storage.removeSupplier(id);
      notification.success(message);
    }
  }

  return { destroy };
}
