import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Setup custom fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ['400', '700'],
});
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ['400', '700'],
});

export const metadata = {
  title: "Eventra - Your Perfect Event Partner",
  description: "Find the best wedding and event services in Bihar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        The background color class has been removed from here
        because it's now handled globally in globals.css
      */}
      <body className={`${montserrat.variable} ${lato.variable} font-lato`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

