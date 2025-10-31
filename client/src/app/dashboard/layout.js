'use client'; // Need client component for onClick handlers

import Link from 'next/link';
import { useRouter } from 'next/navigation';
// --- UPDATE: Import the 'Landmark' icon ---
import { LayoutDashboard, User, CalendarDays, Landmark, LogOut } from 'lucide-react';
import AuthWrapper from '@/components/AuthWrapper.js';
import { auth } from '@/lib/firebase.js'; // Import auth for logout
import { signOut } from 'firebase/auth';

export default function DashboardLayout({ children }) {
  const router = useRouter();

  // --- NEW: Logout Handler ---
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (err) {
      console.error("Failed to log out:", err);
    }
  };

  return (
    <AuthWrapper>
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
            {/* --- NEW: Add Payments Link --- */}
            <Link href="/dashboard/payments" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <Landmark size={20} />
              <span>Payments</span>
            </Link>
          </nav>
          <div className="p-4 border-t border-gray-700">
            {/* --- UPDATE: Made Logout button functional --- */}
           <button 
              onClick={handleLogout}
              // --- FIX: Corrected typo in class name ---
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors w-full text-left"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white shadow-md p-4 h-16 flex items-center">
            <h1 className="text-xl font-semibold text-gray-700">Welcome, Vendor!</h1>
          </header>
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6 pt-16">
            {children}
          </main>
        </div>
        {/* --- FIX: Added missing closing div --- */}
      </div>
    </AuthWrapper>
  );
}

