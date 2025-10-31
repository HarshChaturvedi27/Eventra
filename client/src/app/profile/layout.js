import AuthWrapper from '@/components/AuthWrapper.js'; // Import our guard

export default function ProfileLayout({ children }) {
  // This layout simply wraps the profile page with the AuthWrapper
  // to ensure only logged-in users can see it.
  return (
    <AuthWrapper>
      {children}
    </AuthWrapper>
  );
}
