import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { format } from 'date-fns';
import { ReservationCalendarEvent } from '../../../types/reservation';

interface CalendarProps {
  events: ReservationCalendarEvent[];
}

export default function Calendar({ events }: CalendarProps) {
  const [selectedEvent, setSelectedEvent] =
    useState<ReservationCalendarEvent | null>(null);

  const handleEventClick = (info: { event: { id: string } }) => {
    const event = events.find((e) => e.id === info.event.id);
    if (event) {
      setSelectedEvent(event);
    }
  };

  return (
    <div className='flex h-screen bg-gray-50'>
      <div className='flex-1 p-8'>
        <div className='bg-white rounded-lg shadow-lg p-6 mb-6'>
          <div className='flex items-center gap-2 mb-4'>
            <i className='fa-regular fa-calendar w-6 h-6 text-blue-600'></i>
            <h1 className='text-2xl font-bold text-gray-800'>
              Calendario de Reservas
            </h1>
          </div>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView='timeGridDay'
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'timeGridDay,timeGridWeek,dayGridMonth',
            }}
            locale='es'
            buttonText={{
              today: 'Hoy',
              month: 'Mes',
              week: 'Semana',
              day: 'Día',
            }}
            events={events}
            eventClick={handleEventClick}
            slotMinTime='09:00:00'
            slotMaxTime='20:00:00'
            allDaySlot={false}
            height='700px'
            eventClassNames={(arg) => {
              const status = (
                arg.event.extendedProps as ReservationCalendarEvent
              ).status;
              return [
                status === 'confirmed' && 'bg-green-500',
                status === 'pending' && 'bg-yellow-500',
                status === 'cancelled' && 'bg-red-500',
              ]
                .filter(Boolean)
                .join(' ');
            }}
          />
        </div>
      </div>

      {selectedEvent && (
        <div className='w-80 bg-white p-6 border-l border-gray-200'>
          <h2 className='text-xl font-semibold mb-4'>Detalles de la Reserva</h2>
          <div className='space-y-4'>
            <div className='flex items-start gap-2'>
              <i className='fa-regular fa-calendar w-5 h-5 text-gray-500 mt-1'></i>
              <div>
                <p className='font-medium'>{selectedEvent.title}</p>
                <p className='text-sm text-gray-600'>
                  {format(new Date(selectedEvent.start), 'dd/MM/yyyy')}
                </p>
              </div>
            </div>

            <div className='flex items-start gap-2'>
              <i className='fa-solid fa-clock w-5 h-5 text-gray-500 mt-1'></i>
              <div>
                <p className='font-medium'>Horario</p>
                <p className='text-sm text-gray-600'>
                  {format(new Date(selectedEvent.start), 'HH:mm')} -
                  {format(new Date(selectedEvent.end), 'HH:mm')}
                </p>
              </div>
            </div>

            <div className='flex items-start gap-2'>
              <i className='fa-solid fa-user w-5 h-5 text-gray-500 mt-1'></i>
              <div>
                <p className='font-medium'>Cliente</p>
                <p className='text-sm text-gray-600'>
                  {selectedEvent.customerName}
                </p>
              </div>
            </div>

            <div className='flex items-start gap-2'>
              <i className='fa-regular fa-envelope w-5 h-5 text-gray-500 mt-1'></i>
              <div>
                <p className='font-medium'>Email</p>
                <p className='text-sm text-gray-600'>
                  {selectedEvent.customerEmail}
                </p>
              </div>
            </div>

            {selectedEvent.description && (
              <div className='border-t pt-4 mt-4'>
                <p className='font-medium mb-1'>Notas</p>
                <p className='text-sm text-gray-600'>
                  {selectedEvent.description}
                </p>
              </div>
            )}

            <div className='border-t pt-4 mt-4'>
              <p className='font-medium mb-2'>Estado</p>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedEvent.status === 'confirmed'
                    ? 'bg-green-100 text-green-800'
                    : selectedEvent.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {selectedEvent.status === 'confirmed'
                  ? 'Confirmado'
                  : selectedEvent.status === 'pending'
                  ? 'Pendiente'
                  : 'Cancelado'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
