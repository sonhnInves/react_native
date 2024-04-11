interface Notification {
  success: boolean;
  data: NotificationData[];
}
interface NotificationData {
  id: number;
  name: string;
  expiration_date: string;
  distillery_name: string;
  notes?: any;
}
