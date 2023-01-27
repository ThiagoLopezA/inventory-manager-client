import {
  NotificationService,
  UsersService,
  UsersStorageService,
} from "../../repository";

let service: UsersService;
let notification: NotificationService;
let storage: UsersStorageService;

export function useGetUsers() {
  async function getAll() {
    const { code, response } = await service.findAll();
    if (code !== 200) notification.error("Error");
    notification.success("Exito");
    storage.setUsers(response.data);
  }

  return { getAll };
}
