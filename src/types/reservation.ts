export interface ReservationCalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  description?: string;
  customerName: string;
  customerEmail: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}
