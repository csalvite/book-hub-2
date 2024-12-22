import React from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-50'>
      <div className='fixed right-0 top-0 h-full w-64 bg-white shadow-lg'>
        <div className='p-4 flex justify-between items-center border-b'>
          <h2 className='text-xl font-semibold'>Menu</h2>
          <button onClick={onClose} className='p-2'>
            <i className='fa-solid fa-xmark w-6 h-6'></i>
          </button>
        </div>
        <div className='flex flex-col p-4'>
          <Link
            to='/login'
            className='py-3 text-gray-800 hover:text-blue-600'
            onClick={onClose}
          >
            Login
          </Link>
          <Link
            to='/for-businesses'
            className='py-3 text-gray-800 hover:text-blue-600'
            onClick={onClose}
          >
            For Businesses
          </Link>
          <Link
            to='/about'
            className='py-3 text-gray-800 hover:text-blue-600'
            onClick={onClose}
          >
            About Us
          </Link>
          <Link
            to='/contact'
            className='py-3 text-gray-800 hover:text-blue-600'
            onClick={onClose}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
