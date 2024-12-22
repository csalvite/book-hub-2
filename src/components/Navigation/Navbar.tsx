import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className='relative z-10 flex justify-between items-center px-6 py-4'>
      <Link to='/' className='text-white text-2xl font-bold'>
        BookEasy
      </Link>

      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center space-x-6'>
        <Link
          to='/login'
          className='text-white hover:text-gray-200 transition-colors'
        >
          Login
        </Link>
        <Link
          to='/for-businesses'
          className='text-white hover:text-gray-200 transition-colors'
        >
          For Businesses
        </Link>
        <Link
          to='/about'
          className='text-white hover:text-gray-200 transition-colors'
        >
          About Us
        </Link>
        <Link
          to='/contact'
          className='text-white hover:text-gray-200 transition-colors'
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className='md:hidden text-white p-2'
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <i className='fa-solid fa-bars w-6 h-6'></i>
      </button>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
