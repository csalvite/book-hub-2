import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className='relative bg-blue-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8 items-center'>
          <div>
            <h1 className='text-4xl sm:text-5xl font-bold mb-6'>
              Grow Your Business with Smart Reservations
            </h1>
            <p className='text-xl text-blue-100 mb-8'>
              Join thousands of businesses that trust BookEasy to manage their
              reservations, increase efficiency, and boost revenue.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link
                to='/business-register'
                className='inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center'
              >
                Add Your Business!
              </Link>
              <Link
                to='/business-login'
                className='inline-block border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center'
              >
                Log In
              </Link>
            </div>
          </div>
          <div className='mt-12 lg:mt-0 grid grid-cols-1 gap-6'>
            <div className='bg-blue-800 p-6 rounded-lg'>
              <i className='fa-solid fa-calendar-days text-2xl mb-3'></i>
              <h3 className='font-semibold mb-2'>Smart Scheduling</h3>
              <p className='text-blue-100'>
                Effortlessly manage your bookings with our intuitive calendar
                system
              </p>
            </div>
            <div className='bg-blue-800 p-6 rounded-lg'>
              <i className='fa-solid fa-users text-2xl mb-3'></i>
              <h3 className='font-semibold mb-2'>Customer Management</h3>
              <p className='text-blue-100'>
                Build lasting relationships with detailed customer profiles
              </p>
            </div>
            <div className='bg-blue-800 p-6 rounded-lg'>
              <i className='fa-solid fa-arrow-trend-up text-2xl mb-3'></i>
              <h3 className='font-semibold mb-2'>Business Analytics</h3>
              <p className='text-blue-100'>
                Make data-driven decisions with comprehensive insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
