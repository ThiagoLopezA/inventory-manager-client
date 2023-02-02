import { Email, UseCaseResponse } from "../../models";
import { AuthenticationService, UserStorage } from "../../repository";

let auth: AuthenticationService;
let storage: UserStorage;

export async function authenticateUseCase(
  email: Email,
  password: string
): Promise<UseCaseResponse> {
  try {
    const { data, error, message } = await auth.login(email, password);
    if (error) throw new Error(message);
    storage.setUser(data);
    return { success: true, data };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}
