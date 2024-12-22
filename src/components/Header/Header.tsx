import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Navbar from '../Navigation/Navbar';
import SearchBar from './SearchBar';
import Categories from './Categories';

const Header: React.FC = () => {
  return (
    <div className='relative min-h-screen'>
      {/* Background Image */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      </div>

      <Navbar />

      {/* Hero Content */}
      <div className='relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4'>
          Find and Book Local Services
        </h1>
        <p className='text-lg sm:text-xl text-white mb-8 px-4 max-w-2xl'>
          Discover the best local businesses and book appointments instantly
        </p>

        <SearchBar />
        <Categories />

        {/* Scroll Down Arrow */}
        <ScrollLink
          to='services'
          smooth={true}
          duration={500}
          className='absolute bottom-8 cursor-pointer animate-bounce'
        >
          <ChevronDown className='text-white w-8 h-8' />
        </ScrollLink>
      </div>
    </div>
  );
};

export default Header;
