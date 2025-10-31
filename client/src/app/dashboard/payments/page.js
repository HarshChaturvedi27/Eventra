export default function VendorPaymentsPage() {
  // Dummy data for payouts, including commission calculation
  const payments = [
    { id: 'BK001', eventDate: '2025-12-15', total: 50000, commission: 5000, payout: 45000, status: 'Paid Out' },
    { id: 'BK003', eventDate: '2025-11-30', total: 85000, commission: 8500, payout: 76500, status: 'Paid Out' },
    { id: 'BK002', eventDate: '2026-01-20', total: 120000, commission: 12000, payout: 108000, status: 'Pending' },
  ];

  // Function to format as Rupees
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR', 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0 
    }).format(amount);
  };

  const getStatusClass = (status) => {
    return status === 'Paid Out' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Payments & Payouts</h2>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Payout (Completed)</h3>
          {/* --- FIX: Corrected closing tag --- */}
          <p className="mt-1 text-3xl font-semibold text-green-600">{formatCurrency(121500)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Pending Payout</h3>
          <p className="mt-1 text-3xl font-semibold text-yellow-600">{formatCurrency(108000)}</p>
        </div>
      </div>

      {/* Payouts Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission (10%)</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Your Payout</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.id}</td>
                <td className="px-6 py-4 whitespace-nowTwrap text-sm text-gray-500">{payment.eventDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(payment.total)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">-{formatCurrency(payment.commission)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{formatCurrency(payment.payout)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(payment.status)}`}>
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

