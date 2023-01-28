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
    const { error, message, data } = await service.findAll();
    if (error) {
      notification.error(message);
    } else {
      notification.success(message);
      storage.setUsers(data);
    }
  }

  return { getAll };
}
