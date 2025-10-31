'use client';

import { useAuth } from '@/context/AuthContext.js'; // Import our auth hook

// Dummy booking data for the customer
const dummyBookings = [
  { id: 'V001', vendorName: 'Umaid Bhawan Palace', service: 'Venue', eventDate: '2025-12-20', status: 'Confirmed' },
  { id: 'V002', name: 'DotDusk Studios', service: 'Photographer', eventDate: '2025-12-18', status: 'Confirmed' },
  { id: 'V003', name: 'Indian Accent Catering', service: 'Catering', eventDate: '2025-12-20', status: 'Pending' },
];

const getStatusClass = (status) => {
  switch (status) {
    case 'Confirmed': return 'bg-green-100 text-green-800';
    case 'Pending': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export default function ProfilePage() {
  const { currentUser } = useAuth(); // Get the logged-in user

  // If auth is still loading, currentUser might be null briefly
  if (!currentUser) {
    return (
        <div className="pt-20 container mx-auto p-6 text-center">
            <p className="text-gray-500">Loading profile...</p>
        </div>
    );
  }

  return (
    <div className="bg-gray-50 pt-20"> {/* pt-20 to clear the fixed navbar */}
      {/* Page Header */}
      <header className="bg-pink-50/70 py-12">
        <div className="container mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold text-gray-800">My Profile</h1>
          <p className="mt-2 text-lg text-gray-600">
            Welcome, <span className="font-medium text-pink-600">{currentUser.email}</span>
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Bookings</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dummyBookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.vendorName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.eventDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
