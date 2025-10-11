'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

// SVG Logo Component
const Logo = ({ className }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor"/>
    <path d="M12 6C9.13 6 6.72 7.79 5.75 10.25L7.47 11.03C8.1 9.41 9.91 8 12 8C14.09 8 15.9 9.41 16.53 11.03L18.25 10.25C17.28 7.79 14.87 6 12 6Z" fill="currentColor" opacity="0.6"/>
  </svg>
);


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // State to track client-side mounting

  useEffect(() => {
    setIsMounted(true); // Set to true once the component mounts on the client

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  // Only apply scroll-based styles if the component is mounted on the client
  const hasScrolled = isMounted && scrolled;

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`;
  const linkColor = hasScrolled ? 'text-gray-700' : 'text-white';

  const navLinks = (
    <>
      <Link href="/" className={`${linkColor} hover:text-pink-500 transition-colors`}>Home</Link>
      <Link href="/services" className={`${linkColor} hover:text-pink-500 transition-colors`}>Services</Link>
      <Link href="#" className={`${linkColor} hover:text-pink-500 transition-colors`}>About</Link>
      <Link href="#" className={`${linkColor} hover:text-pink-500 transition-colors`}>Contact</Link>
    </>
  );

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Logo className={`transition-colors duration-300 ${hasScrolled ? 'text-pink-600' : 'text-white'}`} />
          <span className={`font-bold text-2xl transition-colors duration-300 ${linkColor}`}>
            Eventra
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks}
        </div>
        
        <div className="hidden md:flex">
          <Link href="#" className="py-2 px-5 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors shadow-lg">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${linkColor}`}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm absolute top-20 left-0 w-full">
          <div className="flex flex-col items-center space-y-6 py-8">
            <Link href="/" className="text-gray-700 hover:text-pink-500 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-pink-500 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="#" className="text-gray-700 hover:text-pink-500 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#" className="text-gray-700 hover:text-pink-500 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link href="#" className="py-2 px-6 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors" onClick={() => setIsMenuOpen(false)}>Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

