import { NotificationService, SuppliersService } from "../../repository";

let service: SuppliersService;
let notification: NotificationService;

export function useGetSupplier() {
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
