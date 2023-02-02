import { Item, ServiceResponse, Store } from "../models";

export interface StoreService {
  create(store: Store): Promise<ServiceResponse>;
  delete(id: number): Promise<ServiceResponse>;
  update(store: Store): Promise<ServiceResponse>;
  findAll(): Promise<ServiceResponse>;
  findOne(id: number): Promise<ServiceResponse>;
  addItem(store: Store, item: Item): Promise<ServiceResponse>;
  removeItem(store: Store, item: Item): Promise<ServiceResponse>;
  getItems(store: Store): Promise<ServiceResponse>;
}

export interface StoresStorage {
  stores: Store[] | undefined;

  addStore(store: Store): Promise<void>;
  removeStore(id: number): Promise<void>;
  updateStore(store: Store): Promise<void>;
  setStores(stores: Store[]): Promise<void>;
}

export interface StoreStorage {
  store: Store | undefined;

  setStore(store: Store): Promise<Store>;
  updateInventory(inventory: Item[]): Promise<Item[]>;
  updateStore(store: Store): Promise<Store>;
}
