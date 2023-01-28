import { NotificationService, UsersService } from "../../repository";

let service: UsersService;
let notification: NotificationService;

export function useGetUser() {
  async function getOne(id: number) {
    const { error, message, data } = await service.findOne(id);
    if (error) {
      notification.error(message);
    } else {
      notification.success(message);
    }
    return data;
  }

  return { getOne };
}
