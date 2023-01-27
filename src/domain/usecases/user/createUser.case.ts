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
    if (code !== 201) notification.error("Error");
    notification.success("Creado con exito");
    await storage.addUser(user);
  }

  return { create };
}
