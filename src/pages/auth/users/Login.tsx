import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../../components/Auth/LoginForm';
import SocialLogin from '../../../components/Auth/SocialLogin';

const Login: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Sign in to your account
        </h2>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <LoginForm />

          <div className='mt-6'>
            <SocialLogin />
          </div>

          <div className='mt-6 text-center text-sm'>
            <span className='text-gray-600'>Don't have an account?</span>{' '}
            <Link
              to='/register'
              className='font-medium text-blue-600 hover:text-blue-500'
            >
              Register now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
