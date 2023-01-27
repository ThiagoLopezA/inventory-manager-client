import { User } from "../../models";
import {
  NotificationService,
  UsersService,
  UsersStorageService,
} from "../../repository";

let service: UsersService;
let notification: NotificationService;
let storage: UsersStorageService;

export async function useDeleteUser(user: User) {
  const response = await service.delete(user);
  if (response.code !== 200) notification.error("Error");
  notification.success("Exito");
  await storage.removeUser(user);
}
