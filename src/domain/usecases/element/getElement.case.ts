import {
  ElementService,
  ElementStorageService,
  NotificationService,
} from "../../repository";

let service: ElementService;
let storage: ElementStorageService;
let notification: NotificationService;

export function useGetElement() {
  async function getOne(id: number) {
    const { error, message, data } = await service.getOne(id);
    if (error) {
      notification.error(message);
    } else {
      notification.success(message);
    }
    return data;
  }

  return { getOne };
}
