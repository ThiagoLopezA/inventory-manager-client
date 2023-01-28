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
    const { error, message } = await service.update(user);
    if (error) {
      notification.error(message);
    } else {
      await storage.updateUser(user);
      notification.success(message);
    }
  }

  return { update };
}
