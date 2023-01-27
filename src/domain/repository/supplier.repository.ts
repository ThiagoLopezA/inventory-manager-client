import { ServiceResponse, Supplier } from "../models";

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
