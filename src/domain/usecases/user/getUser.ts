import { NotificationService, UsersService } from "../../repository";

let service: UsersService;
let notification: NotificationService;

export function useGetUser() {
  async function getOne(id: number) {
    const { code, response } = await service.findOne(id);
    if (code !== 404 && code !== 200) notification.error("Error");
    if (code === 404) notification.error("Not found");
    notification.success("Found");
    return response;
  }

  return { getOne };
}
