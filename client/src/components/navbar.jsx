import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-pink-600">Eventra</Link>
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/" className="text-gray-700 hover:text-pink-600">Home</Link>
        <Link href="/services" className="text-gray-700 hover:text-pink-600">Services</Link>
        <Link href="#" className="text-gray-700 hover:text-pink-600">About</Link>
        <Link href="#" className="text-gray-700 hover:text-pink-600">Contact</Link>
      </div>
      <div>
        <Link href="#" className="py-2 px-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">Login</Link>
      </div>
    </nav>
  );
}
