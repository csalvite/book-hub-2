import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useNotifications } from '../hooks/useNotifications'; // Ajusta la ruta según sea necesario
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import { useState, useEffect, useRef } from 'react';

export const NotificationBell = () => {
  const { notifications } = useNotifications();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        anchorEl &&
        !anchorEl.contains(event.target as Node) && // No es el botón
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) // No es el popover
      ) {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, anchorEl]);

  return (
    <div>
      <button
        aria-describedby={id}
        className='relative p-2 text-gray-600 hover:text-blue-600'
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faBell} className='w-6 h-6' />
        {notifications.length > 0 && (
          <>
            <span className='absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full'></span>
            <span className='absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping'></span>
          </>
        )}
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        ref={popoverRef}
      >
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <Typography
              key={notification.id}
              sx={{ p: 2 }}
              className='hover:text-blue-600 cursor-pointer hover:bg-gray-100 transition-colors'
            >
              {notification.message} -{' '}
              {new Date(notification.timestamp).toLocaleString()}
            </Typography>
          ))
        ) : (
          <Typography sx={{ p: 2 }}>No notifications</Typography>
        )}
      </Popover>
    </div>
  );
};
