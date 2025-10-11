export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold mb-2">Eventra</h3>
          <p className="text-gray-400">Your one-stop solution for planning the perfect event in Bihar. Find the best vendors with ease.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Become a Vendor</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p className="text-gray-400">Patna, Bihar, India</p>
          <p className="text-gray-400">contact@eventra.com</p>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2025 Eventra. All rights reserved.</p>
      </div>
    </footer>
  );
}