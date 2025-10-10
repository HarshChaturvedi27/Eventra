import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm p-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-3xl font-bold text-[#B76E79]">Eventra</Link>
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-gray-700 hover:text-[#B76E79] transition-colors">Home</Link>
        <Link href="/services" className="text-gray-700 hover:text-[#B76E79] transition-colors">Vendors</Link>
        <Link href="#" className="text-gray-700 hover:text-[#B76E79] transition-colors">Blog</Link>
        <Link href="#" className="text-gray-700 hover:text-[#B76E79] transition-colors">About Us</Link>
      </nav>
      <div>
        <Link href="#" className="py-2 px-5 bg-[#B76E79] text-white rounded-full hover:bg-[#a35f69] transition-all duration-300 shadow-md hover:shadow-lg">
          Get Started
        </Link>
      </div>
    </header>
  );
}

