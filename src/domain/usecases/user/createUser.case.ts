import { User } from "../../models";
import {
  NotificationService,
  UsersService,
  UsersStorageService,
} from "../../repository";

let service: UsersService;
let notification: NotificationService;
let storage: UsersStorageService;

export async function useCreateUser(user: User) {
  const response = await service.create(user);
  if (response.code !== 201) notification.error("Error");
  notification.success("Creado con exito");
  await storage.addUser(user);
}
