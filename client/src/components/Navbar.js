'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation'; // Import useRouter
import Link from 'next/link';
import { Menu, X, MapPin } from 'lucide-react';
import { useAuth } from '@/context/AuthContext.js'; // Import our custom auth hook
import { auth } from '@/lib/firebase.js'; // Import auth for logout
import { signOut } from 'firebase/auth';

// SVG Logo Component (remains the same)
const Logo = ({ className }) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor"/>
      <path d="M12 6C9.13 6 6.72 7.79 5.75 10.25L7.47 11.03C8.1 9.41 9.91 8 12 8C14.09 8 15.9 9.41 16.53 11.03L18.25 10.25C17.28 7.79 14.87 6 12 6Z" fill="currentColor" opacity="0.6"/>
    </svg>
);

const indianCities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur'];

export default function Navbar() {
  // --- NEW: Get user state and router ---
  const { currentUser } = useAuth(); // Get user from our "central brain"
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(indianCities[0]);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  // --- NEW: Logout Handler ---
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // On success, redirect to the login page
      router.push('/login');
    } catch (err) {
      console.error("Failed to log out:", err);
    }
  };

  if (!isMounted) {
    // Basic static navbar for SSR
    return (
       <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
         <div className="container mx-auto px-6 flex justify-between items-center h-20">
             <Link href="/" className="flex items-center space-x-2">
                 <Logo className="text-pink-600" />
                 <span className="font-bold text-2xl text-gray-700">Eventra</span>
             </Link>
         </div>
       </nav>
    );
  }

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${(scrolled || !isHomePage) ? 'bg-white shadow-md' : 'bg-transparent'}`;
  const linkColor = (scrolled || !isHomePage) ? 'text-gray-700' : 'text-white';
  const iconColor = (scrolled || !isHomePage) ? 'text-gray-500' : 'text-white';

  const navLinks = (
    <>
      <Link href="/" className={`${linkColor} hover:text-pink-500 transition-colors`}>Home</Link>
      <Link href="/services" className={`${linkColor} hover:text-pink-500 transition-colors`}>Services</Link>
      {/* --- NEW: Show Dashboard links if logged in --- */}
      {currentUser && (
        <Link href="/dashboard" className={`${linkColor} hover:text-pink-500 transition-colors`}>Dashboard</Link>
      )}
    </>
  );

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Logo className={`transition-colors duration-300 ${(scrolled || !isHomePage) ? 'text-pink-600' : 'text-white'}`} />
          <span className={`font-bold text-2xl transition-colors duration-300 ${linkColor}`}>
            Eventra
          </span>
        </Link>

        {/* Desktop Navigation & City Selector */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks}
           <div className="relative">
              <div className="flex items-center space-x-1 cursor-pointer">
                 <MapPin size={18} className={iconColor} />
                 <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className={`bg-transparent ${linkColor} appearance-none outline-none focus:outline-none pr-6`}
                 >
                    {indianCities.map(city => (
                        <option key={city} value={city} className="text-gray-800">{city}</option>
                    ))}
                 </select>
                 <svg className={`w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none ${iconColor}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </div>
           </div>
        </div>
        
        {/* --- UPDATE: Show Login or Logout button --- */}
        <div className="hidden md:flex">
          {currentUser ? (
            <button 
              onClick={handleLogout}
              className="py-2 px-5 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors shadow-lg"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="py-2 px-5 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors shadow-lg">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button (remains the same) */}
        <div className="md:hidden flex items-center">
            <div className="relative mr-4">
                 <MapPin size={20} className={iconColor} />
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${linkColor}`}>
               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm absolute top-20 left-0 w-full shadow-lg">
          <div className="flex flex-col items-center space-y-6 py-8">
            <Link href="/" className="text-gray-700 hover:text-pink-500 text-lg" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-pink-500 text-lg" onClick={() => setIsMenuOpen(false)}>Services</Link>
            {currentUser && (
              <Link href="/dashboard" className="text-gray-700 hover:text-pink-500 text-lg" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
            )}
            <div className="w-full px-8">
                <label htmlFor="mobile-city-select" className="block text-sm font-medium text-gray-500 mb-1 text-center">Select City</label>
                <select
                    id="mobile-city-select"
                    value={selectedCity}
                    onChange={(e) => {setSelectedCity(e.target.value); setIsMenuOpen(false);}}
                    className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
                 >
                    {indianCities.map(city => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                 </select>
            </div>
            {/* --- UPDATE: Show Login or Logout button --- */}
            {currentUser ? (
              <button 
                onClick={() => {handleLogout(); setIsMenuOpen(false);}}
                className="py-2 px-6 bg-gray-600 text-white rounded-full hover:bg-gray-700"
              >
                Logout
              </button>
            ) : (
              <Link href="/login" className="py-2 px-6 bg-pink-600 text-white rounded-full hover:bg-pink-700" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

