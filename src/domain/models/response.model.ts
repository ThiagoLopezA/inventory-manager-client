export interface ApiResponse {
  code: number;
  message: string;
  body: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ServiceResponse {
  code: number;
  response: any;
}
