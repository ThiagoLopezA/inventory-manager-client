import {
  NotificationService,
  UsersService,
  UsersStorageService,
} from "../../repository";

let service: UsersService;
let notification: NotificationService;
let storage: UsersStorageService;

export function useDeleteUser() {
  async function destroy(id: number) {
    const { code } = await service.delete(1);
    if (code !== 200) notification.error("Error");
    notification.success("Exito");
    await storage.removeUser(id);
  }
  return { destroy };
}
