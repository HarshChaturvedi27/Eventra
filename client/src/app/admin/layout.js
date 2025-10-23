import Link from 'next/link';
import { LayoutDashboard, Users, UserCheck, LogOut } from 'lucide-react';

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-slate-700">Admin Panel</div>
        <nav className="flex-grow p-4 space-y-2">
          <Link href="/admin" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700 transition-colors">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <Link href="/admin/vendors" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700 transition-colors">
            <UserCheck size={20} />
            <span>Manage Vendors</span>
          </Link>
          <Link href="/admin/customers" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700 transition-colors">
            <Users size={20} />
            <span>Manage Customers</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-700">
           <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700 transition-colors w-full text-left">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-md p-4 h-16 flex items-center">
          <h1 className="text-xl font-semibold text-gray-700">Admin Overview</h1>
        </header>
        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6 pt-16"> {/* Added pt-16 for header */}
          {children} {/* This is where the specific admin page content will go */}
        </main>
      </div>
    </div>
  );
}
