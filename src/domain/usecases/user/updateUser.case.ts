import { User } from "../../models";
import {
  NotificationService,
  UsersService,
  UsersStorageService,
} from "../../repository";

let service: UsersService;
let notification: NotificationService;
let storage: UsersStorageService;

export function useUpdateUser() {
  async function update(user: User) {
    const { code } = await service.update(user);
    if (code !== 200) return notification.error("Error");
    await storage.updateUser(user);
    return notification.success("Exito");
  }

  return { update };
}
