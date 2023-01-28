import { Item, ServiceResponse, Store, Ticket, Withdraw } from "../models";

export interface LogisticsService {
  createTicket(ticket: Ticket): Promise<ServiceResponse>;
  deleteTicket(id: number): Promise<ServiceResponse>;
  updateTicket(ticket: Ticket): Promise<ServiceResponse>;
  getTickets(options?: object): Promise<ServiceResponse>;
  createWithdraw(store: Store, item: Item): Promise<ServiceResponse>;
  deleteWithdraw(id: number): Promise<ServiceResponse>;
  getWithdraws(options?: object): Promise<ServiceResponse>;
  getWithdraw(id: number): Promise<ServiceResponse>;
}

export interface LogisticsStorageService {
  setTickets(tickets: Ticket[]): Promise<void>;
  addTicket(ticket: Ticket): Promise<void>;
  removeTicket(id: number): Promise<void>;
  updateTicket(ticket: Ticket): Promise<void>;
  getTickets(): Promise<void>;
  setWithdraws(withdraws: Withdraw[]): Promise<void>;
  addWithdraw(withdraw: Withdraw): Promise<void>;
  removeWithdraw(id: number): Promise<void>;
}
