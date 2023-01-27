import { User } from "../../models";
import {
  NotificationService,
  UsersService,
  UsersStorageService,
} from "../../repository";

let service: UsersService;
let notification: NotificationService;
let storage: UsersStorageService;

export async function useUpdateUser(user: User) {
  const response = await service.update(user);
  if (response.code !== 200) notification.error("Error");
  notification.success("Exito");
  await storage.updateUser(user);
}
