import { NotificationService, StoreService } from "../../repository";

let service: StoreService;
let notification: NotificationService;

export function useGetStore() {
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
