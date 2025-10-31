import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer.js";
import { AuthProvider } from "@/context/AuthContext.js"; // Import our new AuthProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventra - Your Perfect Event Partner",
  description: "Find the best wedding and event services in Bihar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        {/* Wrap everything in the AuthProvider */}
        <AuthProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

