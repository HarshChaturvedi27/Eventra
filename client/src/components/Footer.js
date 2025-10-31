import Link from 'next/link'; // Import Link

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold mb-2">Eventra</h3>
          <p className="text-gray-400">Your one-stop solution for planning the perfect event. Find the best vendors with ease.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul>
            <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
            {/* --- UPDATE: Linked to new vendor page --- */}
            <li><Link href="/become-a-vendor" className="text-gray-400 hover:text-white">Become a Vendor</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p className="text-gray-400">India</p>
          <p className="text-gray-400">contact@eventra.com</p>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2025 Eventra. All rights reserved.</p>
      </div>
    </footer>
  );
}
