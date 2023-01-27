export interface NotificationService {
  success(message: string): void;
  error(message: string): void;
  info(message: string): void;
  warning(message: string): void;
}
