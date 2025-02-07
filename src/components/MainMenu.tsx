import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const MainMenu = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}) => {
  return (
    <nav className='fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <FontAwesomeIcon icon={faCalendar} className='w-8 h-8 text-white' />
            <span className='text-2xl font-bold'>BookHub!</span>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              to='/about'
              className='text-white/80 hover:text-white transition-colors'
            >
              About Us
            </Link>
            <Link
              to='/contact'
              className='text-white/80 hover:text-white transition-colors'
            >
              Contact
            </Link>
            <Link
              to='/for-businesses'
              className='text-white/80 hover:text-white transition-colors'
            >
              For Businesses
            </Link>
            <Link
              to='/login'
              className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors'
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden w-10 h-10 flex items-center justify-center text-white focus:outline-none'
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faBars}
              className={`w-6 h-6 transition-transform duration-300 ${
                isMenuOpen ? 'rotate-90' : 'rotate-0'
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 translate-y-4 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className='container mx-auto px-4 py-6 space-y-4'>
            <Link
              to='/about'
              className='block text-lg text-white/80 hover:text-white transition-colors py-2'
            >
              About Us
            </Link>
            <Link
              to='/contact'
              className='block text-lg text-white/80 hover:text-white transition-colors py-2'
            >
              Contact
            </Link>
            <Link
              to='/for-businesses'
              className='block text-lg text-white/80 hover:text-white transition-colors py-2'
            >
              For Businesses
            </Link>
            <Link to='/login'>
              <button className='w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors'>
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
