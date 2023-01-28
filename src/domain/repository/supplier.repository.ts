import { Request, ServiceResponse, Supplier } from "../models";

export interface SuppliersStorageService {
  addSupplier(supplier: Supplier): Promise<void>;
  removeSupplier(id: number): Promise<void>;
  updateSupplier(supplier: Supplier): Promise<void>;
  getSuppliers(): Promise<Supplier[]>;
  setSuppliers(suppliers: Supplier[]): Promise<void>;
}

export interface SuppliersService {
  create(supplier: Supplier): Promise<ServiceResponse>;
  delete(id: number): Promise<ServiceResponse>;
  update(supplier: Supplier): Promise<ServiceResponse>;
  findAll(): Promise<ServiceResponse>;
  findOne(id: number): Promise<ServiceResponse>;
}

export interface RequestsService {
  create(request: Request): Promise<ServiceResponse>;
  delete(id: number): Promise<ServiceResponse>;
  update(request: Request): Promise<ServiceResponse>;
  findAll(options?: object): Promise<ServiceResponse>;
  findOne(id: number): Promise<ServiceResponse>;
}

export interface RequestsStorageService {
  addRequest(request: Request): Promise<void>;
  removeRequest(id: number): Promise<void>;
  updateRequest(request: Request): Promise<void>;
  getRequests(options?: object): Promise<Request[]>;
  setRequests(requests: Request[]): Promise<void>;
}
