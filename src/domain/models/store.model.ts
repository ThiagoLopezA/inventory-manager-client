import { Element } from "./element.model";

export interface Store {
  id: number;
  location: string;
  name: string;
  inventory: Item[];
}

export interface Item {
  id: number;
  quantity: number;
  element: Element;
  store: Store;
}

export function contains(item: Item, store: Store): number {
  const element = store.inventory.find(i => i.id === item.id);
  if (!element) return -1;
  return store.inventory.indexOf(element);
}

export function addItem(item: Item, store: Store): Store {
  const element = contains(item, store);
  if (element === -1) {
    return { ...store, inventory: [...store.inventory, item] };
  }
  store.inventory[element].quantity += item.quantity;
  return store;
}

export function removeItem(item: Item, store: Store): Store {
  const element = contains(item, store);
  if (element === -1) return store;
  store.inventory = store.inventory.splice(element, 1);
  return store;
}

export function totalItems(store: Store) {
  return store.inventory.reduce((ac, item) => ac + item.quantity, 0);
}
