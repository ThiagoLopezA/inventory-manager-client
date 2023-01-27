import { AuthResponse, Email } from "../../models";
import {
  AuthenticationService,
  CryptService,
  UserStorageService,
} from "../../repository";

let auth: AuthenticationService;
let storage: UserStorageService;
let crypt: CryptService;

export function useAuthenticate() {
  async function authenticate(email: Email, password: string) {
    const user = await auth.login(email, password);
    storage.setUser(user);
  }

  return { authenticate };
}
