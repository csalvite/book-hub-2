import { useState } from 'react';
import { Notification } from '../types/notifications';

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'success',
      message: '¡Bienvenido!',
      timestamp: Date.now(),
    },
    {
      id: '2',
      type: 'warning',
      message: 'Aviso importante',
      timestamp: Date.now(),
    },
  ]);

  // aquí iría la lógica para obtener las notificaciones del servidor
  const getNotifications = async () => {};

  return {
    notifications,
    setNotifications,
    getNotifications,
  };
};
