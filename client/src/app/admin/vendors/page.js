// 'use client'; // Likely needed later for interactions

export default function ManageVendorsPage() {
  // --- UPDATED: Added City ---
  const vendors = [
    { id: 1, name: 'Umaid Bhawan Palace', category: 'Venue', city: 'Jodhpur', status: 'Approved', joinedDate: '2025-10-15' },
    { id: 2, name: 'DotDusk Studios', category: 'Photographer', city: 'Delhi', status: 'Approved', joinedDate: '2025-10-10' },
    { id: 3, name: 'New Catering Co.', category: 'Catering', city: 'Mumbai', status: 'Pending', joinedDate: '2025-10-24' },
    { id: 4, name: 'Fancy Florals', category: 'Decorator', city: 'Bangalore', status: 'Pending', joinedDate: '2025-10-23' },
    { id: 5, name: 'The Oberoi Udaivilas', category: 'Venue', city: 'Udaipur', status: 'Approved', joinedDate: '2025-09-01' },
  ];

  const getStatusClass = (status) => {
    return status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Vendors</h2>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              {/* --- NEW: City Column --- */}
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {vendors.map((vendor) => (
              <tr key={vendor.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{vendor.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vendor.category}</td>
                {/* --- NEW: City Data --- */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vendor.city}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vendor.joinedDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(vendor.status)}`}>
                    {vendor.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  {vendor.status === 'Pending' && (
                    <>
                      <button className="text-green-600 hover:text-green-900">Approve</button>
                      <button className="text-red-600 hover:text-red-900">Reject</button>
                    </>
                  )}
                  {vendor.status === 'Approved' && (
                     <button className="text-gray-400 cursor-not-allowed">Approved</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

