import { Element, ServiceResponse } from "../models";

export interface ElementService {
  create(element: Element): Promise<ServiceResponse>;
  delete(id: number): Promise<ServiceResponse>;
  update(element: Element): Promise<ServiceResponse>;
  getAll(): Promise<ServiceResponse>;
  getOne(id: number): Promise<ServiceResponse>;
}

export interface ElementStorage {
  elements: Element[] | undefined;

  setElements(elements: Element[]): Promise<void>;
  updateElement(element: Element): Promise<void>;
  removeElement(id: number): Promise<void>;
  addElement(element: Element): Promise<void>;
}
