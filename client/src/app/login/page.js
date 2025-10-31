'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/lib/firebase.js'; // Import our auth instance
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); 

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // On success, redirect to the homepage
      // Future: We can check if user is a 'vendor' and redirect to /dashboard
      router.push('/'); 
    } catch (err) {
      setError('Failed to log in. Please check your email and password.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" 
            />
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-pink-700 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
        
        {/* --- UPDATED: Added links for both customer and vendor signup --- */}
        <div className="text-center text-gray-600 mt-6 space-y-2">
          <p>
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-pink-600 hover:underline font-medium">
              Sign up as a Customer
            </Link>
          </p>
          <p>
            Are you a vendor?{' '}
            <Link href="/become-a-vendor" className="text-green-600 hover:underline font-medium">
              Register your business
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

