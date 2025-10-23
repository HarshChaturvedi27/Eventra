'use client'; // Required for Recharts components

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dummy data for charts
const vendorGrowthData = [
  { month: 'Jan', vendors: 10 },
  { month: 'Feb', vendors: 15 },
  { month: 'Mar', vendors: 25 },
  { month: 'Apr', vendors: 40 },
  { month: 'May', vendors: 65 },
  { month: 'Jun', vendors: 90 },
];

const bookingTrendsData = [
  { month: 'Jan', bookings: 20 },
  { month: 'Feb', bookings: 35 },
  { month: 'Mar', bookings: 60 },
  { month: 'Apr', bookings: 80 },
  { month: 'May', bookings: 110 },
  { month: 'Jun', bookings: 150 },
];


export default function AdminDashboardPage() {
  // Dummy data for summary cards
  const stats = [
    { name: 'Total Vendors', value: '150+' },
    { name: 'Active Customers', value: '1,200+' },
    { name: 'Total Bookings', value: '580' },
    { name: 'Pending Approvals', value: '12' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Admin Dashboard</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
            <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vendor Growth Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
           <h3 className="text-lg font-semibold text-gray-800 mb-4">Vendor Growth (Last 6 Months)</h3>
           {/* Responsive Container makes the chart adapt to screen size */}
           <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={vendorGrowthData}
                margin={{ top: 5, right: 20, left: -10, bottom: 5 }} // Adjusted margins
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0"/>
                <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }}/>
                <YAxis tick={{ fill: '#6b7280', fontSize: 12 }}/>
                <Tooltip wrapperStyle={{ outline: 'none' }}/>
                <Legend wrapperStyle={{ fontSize: 14 }}/>
                <Line type="monotone" dataKey="vendors" stroke="#ec4899" strokeWidth={2} activeDot={{ r: 8 }} name="New Vendors"/>
              </LineChart>
           </ResponsiveContainer>
        </div>

        {/* Booking Trends Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
           <h3 className="text-lg font-semibold text-gray-800 mb-4">Booking Trends (Last 6 Months)</h3>
           <ResponsiveContainer width="100%" height={300}>
             <BarChart
               data={bookingTrendsData}
               margin={{ top: 5, right: 20, left: -20, bottom: 5 }} // Adjusted margins
             >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0"/>
                <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }}/>
                <YAxis tick={{ fill: '#6b7280', fontSize: 12 }}/>
                <Tooltip wrapperStyle={{ outline: 'none' }}/>
                <Legend wrapperStyle={{ fontSize: 14 }}/>
                <Bar dataKey="bookings" fill="#8b5cf6" name="Bookings" />
              </BarChart>
           </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

