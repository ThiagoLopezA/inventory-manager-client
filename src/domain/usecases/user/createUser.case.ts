import { User } from "../../models";
import {
  NotificationService,
  UsersService,
  UsersStorageService,
} from "../../repository";

let service: UsersService;
let notification: NotificationService;
let storage: UsersStorageService;

export function useCreateUser() {
  async function create(user: User) {
    const { error, message } = await service.create(user);
    if (error) {
      notification.error(message);
    } else {
      await storage.addUser(user);
      notification.success(message);
    }
  }

  return { create };
}
