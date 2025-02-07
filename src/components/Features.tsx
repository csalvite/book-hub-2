import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faScissors,
  faUtensils,
  faTooth,
  faHeart,
  faDumbbell,
  faCoffee,
  faCar,
  faPalette,
  faMusic,
} from '@fortawesome/free-solid-svg-icons';

export const Features = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const services = [
    { icon: faTooth, name: 'Dentista', color: 'from-blue-400 to-blue-600' },
    {
      icon: faUtensils,
      name: 'Restaurantes',
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: faHeart,
      name: 'Fisioterapeuta',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: faScissors,
      name: 'Peluquería',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: faDumbbell,
      name: 'Gimnasio',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: faCoffee,
      name: 'Cafeterías',
      color: 'from-yellow-400 to-yellow-600',
    },
    { icon: faCar, name: 'Talleres', color: 'from-gray-400 to-gray-600' },
    { icon: faPalette, name: 'Estética', color: 'from-pink-400 to-pink-600' },
    { icon: faMusic, name: 'Música', color: 'from-indigo-400 to-indigo-600' },
  ];

  return (
    <div className={`relative ${isMenuOpen && 'opacity-50'}`}>
      <div className='absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-black'></div>

      <div className='relative container mx-auto px-4 pt-32'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-300 to-pink-300 text-transparent bg-clip-text'>
            Tu tiempo es valioso
          </h1>
          <p className='text-xl sm:text-2xl text-gray-300 mb-12'>
            Reserva los mejores servicios locales en un solo lugar
          </p>
          <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-24'>
            <input
              type='text'
              placeholder='¿Qué servicio necesitas?'
              className='w-full sm:w-96 px-6 sm:px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-lg'
            />
            <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors'>
              Buscar
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-24'>
          {services.map((service) => (
            <div
              key={service.name}
              className='group relative overflow-hidden rounded-3xl cursor-pointer'
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              <div className='relative bg-white/10 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-3xl group-hover:border-transparent transition-colors'>
                <div className='flex items-center space-x-4'>
                  <FontAwesomeIcon
                    icon={service.icon}
                    className='w-8 sm:w-10 h-8 sm:h-10 text-white'
                  />
                  <h3 className='text-xl sm:text-2xl font-semibold'>
                    {service.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-24'>
          <div className='relative group'>
            <div className='absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity'></div>
            <div className='relative p-6 sm:p-8 border border-white/10 rounded-3xl group-hover:border-white/20 transition-colors'>
              <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6'>
                <FontAwesomeIcon
                  icon={faCalendar}
                  className='w-8 h-8 text-white'
                />
              </div>
              <h3 className='text-xl sm:text-2xl font-semibold mb-4'>
                Reserva 24/7
              </h3>
              <p className='text-gray-400'>
                Agenda tus citas en cualquier momento, desde cualquier lugar
              </p>
            </div>
          </div>
          <div className='relative group'>
            <div className='absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity'></div>
            <div className='relative p-6 sm:p-8 border border-white/10 rounded-3xl group-hover:border-white/20 transition-colors'>
              <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6'>
                <FontAwesomeIcon
                  icon={faHeart}
                  className='w-8 h-8 text-white'
                />
              </div>
              <h3 className='text-xl sm:text-2xl font-semibold mb-4'>
                Profesionales verificados
              </h3>
              <p className='text-gray-400'>
                Solo trabajamos con los mejores profesionales de cada sector
              </p>
            </div>
          </div>
          <div className='relative group'>
            <div className='absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity'></div>
            <div className='relative p-6 sm:p-8 border border-white/10 rounded-3xl group-hover:border-white/20 transition-colors'>
              <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6'>
                <FontAwesomeIcon
                  icon={faCoffee}
                  className='w-8 h-8 text-white'
                />
              </div>
              <h3 className='text-xl sm:text-2xl font-semibold mb-4'>
                Variedad de servicios
              </h3>
              <p className='text-gray-400'>
                Encuentra todo lo que necesitas en nuestra plataforma
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
