import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

export default function DashboardComponent() {
  return (
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
  );
}
