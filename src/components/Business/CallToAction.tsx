import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <div className='bg-blue-900 text-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-3xl font-bold mb-4'>
          Ready to grow your business?
        </h2>
        <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
          Join thousands of successful businesses using BookEasy to manage their
          reservations
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <Link
            to='/register'
            className='inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors'
          >
            Get Started Now
          </Link>
          <Link
            to='/contact'
            className='inline-block border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors'
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
