import { NotificationService, SuppliersService } from "../../repository";

let service: SuppliersService;
let notification: NotificationService;

export function useGetSupplier() {
  async function getOne(id: number) {
    const { code, response } = await service.findOne(id);
    if (code === 404) notification.error("Not found");
    notification.success("Found");
    return response;
  }
  return { getOne };
}
