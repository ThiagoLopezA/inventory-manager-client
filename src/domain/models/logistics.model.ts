import { Store } from "./store.model";
import { Element } from "./element.model";

export interface Ticket {
  id: number;
  source: Store;
  destination: Store;
  description: string;
  status: Status;
}

export interface Status {
  id: number;
  name: string;
}

export interface Payload {
  id: number;
  element: Element;
  ticket: Ticket;
  quantity: number;
}

export interface Withdraw {
  id: number;
  description: string;
  element: Element;
  store: Store;
  quantity: number;
}
