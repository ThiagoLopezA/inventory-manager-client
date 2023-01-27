import { AuthResponse } from "../models";

export interface Group {
  count: number;
  data: any[];
}

export interface CryptService {
  decode(code: string): Group | object | AuthResponse;
}
