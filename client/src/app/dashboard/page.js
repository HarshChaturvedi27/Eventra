export default function DashboardHomePage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-600">
          Welcome to your Eventra Vendor Dashboard. Here you can manage your profile, view bookings, and track your performance.
        </p>
        {/* Placeholder for future charts */}
        <div className="mt-8 text-center text-gray-400 italic">
          (Summary charts will be displayed here)
        </div>
      </div>
    </div>
  );
}

