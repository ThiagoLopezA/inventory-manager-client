import { ServiceResponse, Store } from "../models";

export interface StoreService {
  create(store: Store): Promise<ServiceResponse>;
  delete(id: number): Promise<ServiceResponse>;
  update(store: Store): Promise<ServiceResponse>;
  findAll(): Promise<ServiceResponse>;
  findOne(id: number): Promise<ServiceResponse>;
}

export interface StoreStorageService {
  addStore(store: Store): Promise<void>;
  removeStore(id: number): Promise<void>;
  updateStore(store: Store): Promise<void>;
  getStores(): Promise<Store[]>;
  setStores(stores: Store[]): Promise<void>;
}
