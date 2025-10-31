'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext.js';

// This is a new component that will "guard" our protected pages
export default function AuthWrapper({ children }) {
  const { currentUser } = useAuth(); // Get user from our context
  const router = useRouter();

  useEffect(() => {
    // If there is no logged-in user, redirect to the login page
    if (currentUser === null) {
      router.push('/login');
    }
  }, [currentUser, router]); // Re-run this effect if the user or router changes

  // If a user is logged in, show the children components (the protected page)
  if (currentUser) {
    return <>{children}</>;
  }

  // Optional: You can return a loading spinner here while checking the user
  // For now, we return null, and the redirect will handle the rest.
  return null; 
}
