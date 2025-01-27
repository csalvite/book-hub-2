import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faUsers,
  faMoneyBillTrendUp,
  faBagShopping,
  faMagnifyingGlass,
  faBell,
  faUserCircle,
  faEllipsisVertical,
  faArrowUp,
  faArrowDown,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          <h1 className='text-2xl font-bold text-blue-600'>BusinessPro</h1>
          <button
            className='lg:hidden text-gray-600 hover:text-gray-900'
            onClick={() => setSidebarOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} className='w-6 h-6' />
          </button>
        </div>
        <nav className='mt-6'>
          {[
            { icon: faChartLine, text: 'Dashboard', active: true },
            { icon: faUsers, text: 'Customers' },
            { icon: faMoneyBillTrendUp, text: 'Sales' },
            { icon: faBagShopping, text: 'Products' },
          ].map((item, index) => (
            <a
              key={index}
              href='#'
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                item.active ? 'bg-blue-50 text-blue-600' : ''
              }`}
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
                <button className='relative p-2 text-gray-600 hover:text-blue-600'>
                  <FontAwesomeIcon icon={faBell} className='w-6 h-6' />
                  <span className='absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full'></span>
                </button>
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

        <div className='p-4 sm:p-6 lg:p-8'>
          {/* Stats Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8'>
            {[
              {
                title: 'Total Revenue',
                value: '$54,239',
                change: 12.5,
                up: true,
              },
              {
                title: 'Total Customers',
                value: '1,853',
                change: 8.2,
                up: true,
              },
              {
                title: 'Average Order',
                value: '$249',
                change: -3.1,
                up: false,
              },
              {
                title: 'Conversion Rate',
                value: '3.2%',
                change: 2.4,
                up: true,
              },
            ].map((stat, index) => (
              <div key={index} className='bg-white p-6 rounded-xl shadow-sm'>
                <div className='flex justify-between items-start mb-4'>
                  <h3 className='text-gray-500 text-sm'>{stat.title}</h3>
                  <button className='text-gray-400 hover:text-gray-600'>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                </div>
                <div className='flex items-baseline gap-2'>
                  <span className='text-2xl font-bold'>{stat.value}</span>
                  <span
                    className={`flex items-center text-sm ${
                      stat.up ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={stat.up ? faArrowUp : faArrowDown}
                      className='w-3 h-3 mr-1'
                    />
                    {Math.abs(stat.change)}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Orders Table */}
          <div className='bg-white rounded-xl shadow-sm p-4 sm:p-6'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-xl font-semibold'>Recent Orders</h2>
              <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                View All
              </button>
            </div>
            <div className='overflow-x-auto -mx-4 sm:mx-0'>
              <div className='inline-block min-w-full align-middle'>
                <table className='min-w-full'>
                  <thead>
                    <tr className='border-b border-gray-200'>
                      <th className='text-left py-3 px-4 text-gray-600 text-sm font-medium'>
                        Order ID
                      </th>
                      <th className='text-left py-3 px-4 text-gray-600 text-sm font-medium hidden sm:table-cell'>
                        Customer
                      </th>
                      <th className='text-left py-3 px-4 text-gray-600 text-sm font-medium'>
                        Product
                      </th>
                      <th className='text-left py-3 px-4 text-gray-600 text-sm font-medium'>
                        Amount
                      </th>
                      <th className='text-left py-3 px-4 text-gray-600 text-sm font-medium'>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: '#12345',
                        customer: 'Sarah Johnson',
                        product: 'Premium Plan',
                        amount: '$299.00',
                        status: 'Completed',
                      },
                      {
                        id: '#12344',
                        customer: 'Michael Chen',
                        product: 'Basic Plan',
                        amount: '$199.00',
                        status: 'Pending',
                      },
                      {
                        id: '#12343',
                        customer: 'Emma Wilson',
                        product: 'Pro Plan',
                        amount: '$399.00',
                        status: 'Processing',
                      },
                      {
                        id: '#12342',
                        customer: 'James Brown',
                        product: 'Premium Plan',
                        amount: '$299.00',
                        status: 'Completed',
                      },
                      {
                        id: '#12341',
                        customer: 'Lisa Anderson',
                        product: 'Basic Plan',
                        amount: '$199.00',
                        status: 'Completed',
                      },
                    ].map((order, index) => (
                      <tr
                        key={index}
                        className='border-b border-gray-100 hover:bg-gray-50'
                      >
                        <td className='py-3 px-4'>
                          <span className='font-medium text-blue-600'>
                            {order.id}
                          </span>
                        </td>
                        <td className='py-3 px-4 hidden sm:table-cell'>
                          {order.customer}
                        </td>
                        <td className='py-3 px-4'>{order.product}</td>
                        <td className='py-3 px-4'>{order.amount}</td>
                        <td className='py-3 px-4'>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              order.status === 'Completed'
                                ? 'bg-green-100 text-green-800'
                                : order.status === 'Processing'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
