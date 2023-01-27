export interface ApiResponse {
  code: number;
  message: string;
  body: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}
