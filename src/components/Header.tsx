import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/searchSlice';
import { SearchIcon } from '../ui/components/SearchIcon';
import Navbar from './Navigation/Navbar';

const Header: React.FC = () => {
  const dispatch = useDispatch();

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

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className='relative flex flex-col items-center justify-center h-[calc(100vh-80px)] px-4 text-center'>
        <h1 className='text-5xl font-bold text-white mb-4'>
          Find and Book Local Services
        </h1>
        <p className='text-xl text-white mb-8'>
          Discover the best local businesses and book appointments instantly
        </p>

        {/* Search Bar */}
        <div className='w-full max-w-2xl mb-12'>
          <div className='relative'>
            <SearchIcon className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
            <input
              type='text'
              placeholder='Search for services...'
              className='w-full px-12 py-4 rounded-full bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </div>
        </div>

        {/* Categories */}
        <div className='w-full max-w-4xl overflow-x-auto pb-4'>
          <div className='flex justify-center space-x-4 px-4'>
            {categories.map((category) => (
              <div key={category.id} className='flex-shrink-0'>
                <div className='w-32 h-32 rounded-lg overflow-hidden relative group cursor-pointer'>
                  <img
                    src={category.image}
                    alt={category.name}
                    className='w-full h-full object-cover transition-transform group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                    <span className='text-white text-center font-medium'>
                      {category.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <ScrollLink
          to='services'
          smooth={true}
          duration={500}
          className='absolute bottom-8 cursor-pointer animate-bounce'
        >
          <i className='fa-solid fa-angle-down text-white text-2xl'></i>
        </ScrollLink>
      </div>
    </div>
  );
};

const categories = [
  {
    id: 1,
    name: 'Restaurants',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    name: 'Beauty & Spa',
    image:
      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'Fitness',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Health',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    name: 'Home Services',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
];

export default Header;
