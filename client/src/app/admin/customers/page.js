export default function ManageCustomersPage() {
  // --- UPDATED: Added City ---
  const customers = [
    { id: 101, name: 'Priya Sharma', email: 'priya.sharma@email.com', city: 'Mumbai', registeredDate: '2025-10-20' },
    { id: 102, name: 'Rahul Verma', email: 'rahul.v@email.com', city: 'Delhi', registeredDate: '2025-10-18' },
    { id: 103, name: 'Anjali Singh', email: 'anjali.s@email.com', city: 'Bangalore', registeredDate: '2025-10-15' },
    { id: 104, name: 'Amit Kumar', email: 'amit.k@email.com', city: 'Pune', registeredDate: '2025-10-12' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Customers</h2>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              {/* --- NEW: City Column --- */}
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registered Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.email}</td>
                {/* --- NEW: City Data --- */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.city}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.registeredDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

