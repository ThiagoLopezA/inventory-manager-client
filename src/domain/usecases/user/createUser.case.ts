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
    const { code } = await service.create(user);
    if (code !== 201) return notification.error("Error");
    await storage.addUser(user);
    return notification.success("Creado con exito");
  }

  return { create };
}
