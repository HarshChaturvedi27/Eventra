import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventra - Your Perfect Event Partner",
  description: "Find the best wedding and event services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

