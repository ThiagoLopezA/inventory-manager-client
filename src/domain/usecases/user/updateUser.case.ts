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
    if (code !== 200) notification.error("Error");
    notification.success("Exito");
    await storage.updateUser(user);
  }

  return { update };
}
