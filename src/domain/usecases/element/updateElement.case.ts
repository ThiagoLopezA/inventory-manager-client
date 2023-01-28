import { Element } from "../../models";
import {
  ElementService,
  ElementStorageService,
  NotificationService,
} from "../../repository";

let service: ElementService;
let storage: ElementStorageService;
let notification: NotificationService;

export function useUpdateElement() {
  async function update(element: Element) {
    const { error, message } = await service.update(element);
    if (error) {
      notification.error(message);
    } else {
      await storage.updateElement(element);
      notification.success(message);
    }
  }

  return { update };
}
