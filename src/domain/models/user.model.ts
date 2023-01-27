import { Email } from "./email.d.type";

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: Email;
  role: Role;
}

export interface Role {
  id: number;
  name: string;
}
