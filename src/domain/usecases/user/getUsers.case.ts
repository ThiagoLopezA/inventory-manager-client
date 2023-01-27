import {
  CryptService,
  Group,
  NotificationService,
  UsersService,
  UsersStorageService,
} from "../../repository";

let service: UsersService;
let notification: NotificationService;
let crypt: CryptService;
let storage: UsersStorageService;

export async function useGetUsers() {
  const response = await service.findAll();
  if (response.code !== 200) notification.error("Error");
  notification.success("Exito");
  const users = crypt.decode(response.body) as Group;
  storage.setUsers(users.data);
}
