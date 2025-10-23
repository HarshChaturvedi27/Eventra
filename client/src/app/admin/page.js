// 'use client'; // Will need this when adding charts

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

      {/* Placeholder for Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
           <h3 className="text-lg font-semibold text-gray-800 mb-4">Vendor Growth</h3>
           <div className="h-64 flex items-center justify-center text-gray-400 italic">
             (Chart showing vendor signups over time will go here)
           </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
           <h3 className="text-lg font-semibold text-gray-800 mb-4">Booking Trends</h3>
           <div className="h-64 flex items-center justify-center text-gray-400 italic">
             (Chart showing bookings per month will go here)
           </div>
        </div>
      </div>
    </div>
  );
}
