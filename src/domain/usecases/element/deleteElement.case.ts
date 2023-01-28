import {
  ElementService,
  ElementStorageService,
  NotificationService,
} from "../../repository";

let service: ElementService;
let storage: ElementStorageService;
let notification: NotificationService;

export function useDestroyElement() {
  async function destroy(id: number) {
    const { error, message } = await service.delete(id);
    if (error) {
      notification.error(message);
    } else {
      storage.removeElement(id);
      notification.success(message);
    }
  }

  return { destroy };
}
