import {
  NotificationService,
  UsersService,
  UsersStorageService,
} from "../../repository";

let service: UsersService;
let notification: NotificationService;
let storage: UsersStorageService;

export function useDestroyUser() {
  async function destroy(id: number) {
    const { code } = await service.delete(id);
    if (code !== 200) return notification.error("Error");
    await storage.removeUser(id);
    return notification.success("Exito");
  }
  return { destroy };
}
