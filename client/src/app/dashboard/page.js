'use client'; // Required for Recharts components

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dummy data for vendor's booking summary
const vendorBookingData = [
  { month: 'Jan', bookings: 5 },
  { month: 'Feb', bookings: 8 },
  { month: 'Mar', bookings: 12 },
  { month: 'Apr', bookings: 7 },
  { month: 'May', bookings: 15 },
  { month: 'Jun', bookings: 10 },
];

export default function DashboardHomePage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h2>
      
      {/* Welcome Message */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <p className="text-gray-600">
          Welcome to your Eventra Vendor Dashboard. Here you can manage your profile, view bookings, and track your performance.
        </p>
      </div>

      {/* Booking Summary Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Bookings (Last 6 Months)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={vendorBookingData}
            margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }}/>
            <YAxis tick={{ fill: '#6b7280', fontSize: 12 }}/>
            <Tooltip wrapperStyle={{ outline: 'none' }}/>
            <Legend wrapperStyle={{ fontSize: 14 }}/>
            <Bar dataKey="bookings" fill="#10b981" name="Your Bookings" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

