import { addHours } from 'date-fns';
import { ReservationCalendarEvent } from '../types/reservation';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

export const mockReservations: ReservationCalendarEvent[] = [
  {
    id: '1',
    title: 'Corte de cabello',
    start: addHours(today, 6).toISOString(),
    end: addHours(today, 7).toISOString(),
    customerName: 'Juan Pérez',
    customerEmail: 'juan@example.com',
    status: 'cancelled',
    description: 'Corte de cabello y barba',
  },
  {
    id: '2',
    title: 'Manicure',
    start: addHours(today, 1).toISOString(),
    end: addHours(today, 2).toISOString(),
    customerName: 'María García',
    customerEmail: 'maria@example.com',
    status: 'confirmed',
  },
  {
    id: '3',
    title: 'Tratamiento facial',
    start: addHours(tomorrow, 4).toISOString(),
    end: addHours(tomorrow, 4.5).toISOString(),
    customerName: 'Ana López',
    customerEmail: 'ana@example.com',
    status: 'pending',
  },
];
