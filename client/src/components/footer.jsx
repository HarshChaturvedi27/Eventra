export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white p-10 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-2 text-[#B76E79]">Eventra</h3>
          <p className="text-gray-400 max-w-md">Your one-stop solution for planning the perfect event in Bihar. We connect you with the best vendors to make your dream event a reality.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Browse Vendors</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Become a Vendor</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Add social icons here in the future */}
            <p className="text-gray-400">Socials</p>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
        <p>&copy; 2025 Eventra. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

