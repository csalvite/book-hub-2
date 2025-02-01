import { format } from 'date-fns';
import { ReservationCalendarEvent } from '../../../types/reservation';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SelectedEvent = ({
  selectedEvent,
  setSelectedEvent,
}: {
  selectedEvent: ReservationCalendarEvent;
  setSelectedEvent: (event: ReservationCalendarEvent | null) => void;
}) => {
  return (
    <div className='w-80 bg-white p-6 border-l border-gray-200 shadow relative z-10'>
      <h2 className='text-xl font-semibold mb-4'>Detalles de la Reserva</h2>
      <FontAwesomeIcon
        icon={faX}
        onClick={() => setSelectedEvent(null)}
        className='absolute top-4 right-4 cursor-pointer'
      />
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
            <p className='text-sm text-gray-600'>{selectedEvent.description}</p>
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
  );
};
