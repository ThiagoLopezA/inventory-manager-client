import { Element } from "../../models";
import {
  ElementService,
  ElementStorageService,
  NotificationService,
} from "../../repository";

let service: ElementService;
let storage: ElementStorageService;
let notification: NotificationService;

export function useCreateElement() {
  async function create(element: Element) {
    const { message, error } = await service.create(element);
    if (error) {
      notification.error(message);
    } else {
      await storage.addElement(element);
      notification.success(message);
    }
  }

  return { create };
}
