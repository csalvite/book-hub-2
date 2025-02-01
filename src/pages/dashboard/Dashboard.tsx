import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faChartLine,
  faUsers,
  faMoneyBillTrendUp,
  faBagShopping,
  faMagnifyingGlass,
  faUserCircle,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Calendar from '../../components/Dashboard/Calendar/Calendar';
import { mockReservations } from '../../mocks/mockCalendar';
import DashboardComponent from '../../components/Dashboard/Dashboard';
import { NotificationBell } from '../../components/NotificationBell';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOptions, setMenuOptions] = useState([
    {
      icon: faCalendar,
      text: 'Calendar',
      active: true,
      component: <Calendar events={mockReservations} />,
    },
    {
      icon: faChartLine,
      text: 'Dashboard',
      component: <DashboardComponent />,
    },
    {
      icon: faUsers,
      text: 'Customers',
      component: <div>Customers Component</div>,
    },
    {
      icon: faMoneyBillTrendUp,
      text: 'Sales',
      component: <div>Sales Component</div>,
    },
    {
      icon: faBagShopping,
      text: 'Products',
      component: <div>Products Component</div>,
    },
  ]);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-gray-600 bg-opacity-50 z-20 lg:hidden'
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='p-6 flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-blue-600'>BookHub</h1>
          <button
            className='lg:hidden text-gray-600 hover:text-gray-900'
            onClick={() => setSidebarOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} className='w-6 h-6' />
          </button>
        </div>
        <nav className='mt-6'>
          {menuOptions.map((item, index) => (
            <a
              key={index}
              href='#'
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                item.active ? 'bg-blue-50 text-blue-600' : ''
              }`}
              onClick={() => {
                const updatedOptions = menuOptions.map((option, i) => ({
                  ...option,
                  active: i === index,
                }));
                setMenuOptions(updatedOptions);
              }}
            >
              <FontAwesomeIcon icon={item.icon} className='w-5 h-5' />
              <span className='ml-3'>{item.text}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className='lg:ml-64 min-h-screen'>
        {/* Header */}
        <header className='bg-white shadow-sm'>
          <div className='px-4 sm:px-6 lg:px-8 py-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <button
                  className='lg:hidden text-gray-600 hover:text-gray-900'
                  onClick={() => setSidebarOpen(true)}
                >
                  <FontAwesomeIcon icon={faBars} className='w-6 h-6' />
                </button>
                <div className='relative hidden sm:block'>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                  />
                  <input
                    type='text'
                    placeholder='Search...'
                    className='pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64'
                  />
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <NotificationBell />
                <div className='flex items-center gap-2'>
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className='w-8 h-8 text-gray-600'
                  />
                  <span className='font-medium hidden sm:inline'>John Doe</span>
                </div>
              </div>
            </div>
            {/* Mobile Search */}
            <div className='mt-4 sm:hidden relative'>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
              />
              <input
                type='text'
                placeholder='Search...'
                className='w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        {menuOptions.find((option) => option.active)?.component}
      </main>
    </div>
  );
}

export default Dashboard;
