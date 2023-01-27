import { Store } from "./store.model";
import { Email } from "./email.d.type";

export interface Supplier {
  id: number;
  phone: string;
  name: string;
  email: Email;
  location: string;
}

export interface Request {
  id: number;
  state: string;
  description: string;
  supplier: Supplier;
  store: Store;
}
