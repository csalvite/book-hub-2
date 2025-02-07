import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

import {
  faInstagram,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <footer
      className={`relative border-t border-white/10 bg-black/50 backdrop-blur-lg ${
        isMenuOpen && 'opacity-50'
      }`}
    >
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <FontAwesomeIcon
                icon={faCalendar}
                className='w-8 h-8 text-white'
              />
              <span className='text-2xl font-bold'>ReservaYa</span>
            </div>
            <p className='text-gray-400'>
              Conectando personas con los mejores servicios locales
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Enlaces rápidos</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Contacto</h4>
            <ul className='space-y-2'>
              <li className='flex items-center space-x-2'>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className='w-5 h-5 text-gray-400'
                />
                <a
                  href='mailto:info@reservaya.com'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  info@reservaya.com
                </a>
              </li>
              <li className='flex items-center space-x-2'>
                <FontAwesomeIcon
                  icon={faPhone}
                  className='w-5 h-5 text-gray-400'
                />
                <a
                  href='tel:+34900000000'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  +34 900 000 000
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Síguenos</h4>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <FontAwesomeIcon icon={faInstagram} className='w-6 h-6' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <FontAwesomeIcon icon={faTwitter} className='w-6 h-6' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <FontAwesomeIcon icon={faFacebook} className='w-6 h-6' />
              </a>
            </div>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-white/10 text-center text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} ReservaYa. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
