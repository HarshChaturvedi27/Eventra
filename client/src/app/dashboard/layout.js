import Link from 'next/link';
import { LayoutDashboard, User, CalendarDays, LogOut } from 'lucide-react';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">Vendor Dashboard</div>
        <nav className="flex-grow p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors">
            <LayoutDashboard size={20} />
            <span>Overview</span>
          </Link>
          <Link href="/dashboard/profile" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors">
            <User size={20} />
            <span>Profile</span>
          </Link>
          <Link href="/dashboard/bookings" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors">
            <CalendarDays size={20} />
            <span>Bookings</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-700">
           <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors w-full text-left">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Simple Header */}
        <header className="bg-white shadow-md p-4 h-16 flex items-center"> {/* Defined height */}
          <h1 className="text-xl font-semibold text-gray-700">Welcome, Vendor!</h1>
        </header>
        {/* --- FIX: Added pt-16 (header height) and padding --- */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6 pt-16">
          {children} {/* Page content starts below the header */}
        </main>
      </div>
    </div>
  );
}

