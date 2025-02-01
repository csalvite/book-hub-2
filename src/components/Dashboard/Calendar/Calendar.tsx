import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ReservationCalendarEvent } from '../../../types/reservation';
import { SelectedEvent } from './SelectedEvent';

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
            slotMinTime='08:00:00'
            slotMaxTime='22:00:00'
            allDaySlot={false}
            height='800px'
            eventClassNames={(arg) => {
              const status = (
                arg.event.extendedProps as ReservationCalendarEvent
              ).status;
              return [
                'cursor-pointer',
                status === 'confirmed' && 'bg-green-500 hover:bg-green-600',
                status === 'pending' && 'bg-yellow-500 hover:bg-yellow-600',
                status === 'cancelled' && 'bg-red-500 hover:bg-red-600',
              ]
                .filter(Boolean)
                .join(' ');
            }}
          />
        </div>
      </div>

      {selectedEvent && (
        <SelectedEvent
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
        />
      )}
    </div>
  );
}
