import { Element, ServiceResponse } from "../models";

export interface ElementService {
  create(element: Element): Promise<ServiceResponse>;
  delete(id: number): Promise<ServiceResponse>;
  update(element: Element): Promise<ServiceResponse>;
  getAll(): Promise<ServiceResponse>;
  getOne(id: number): Promise<ServiceResponse>;
}

export interface ElementStorageService {
  setElements(elements: Element[]): Promise<void>;
  getElements(): Promise<Element[]>;
  updateElement(element: Element): Promise<void>;
  removeElement(id: number): Promise<void>;
  addElement(element: Element): Promise<void>;
}
