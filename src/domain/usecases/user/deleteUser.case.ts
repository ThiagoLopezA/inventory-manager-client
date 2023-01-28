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
    const { error, message } = await service.delete(id);
    if (error) {
      notification.error(message);
    } else {
      await storage.removeUser(id);
      notification.success(message);
    }
  }

  return { destroy };
}
