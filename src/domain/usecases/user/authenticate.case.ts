import { Email } from "../../models";
import { AuthenticationService, UserStorageService } from "../../repository";

let auth: AuthenticationService;
let storage: UserStorageService;

export function useAuthenticate() {
  async function authenticate(email: Email, password: string) {
    const user = await auth.login(email, password);
    storage.setUser(user);
  }

  return { authenticate };
}
