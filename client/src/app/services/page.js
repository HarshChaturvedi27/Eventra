import Link from 'next/link';

// Dummy vendor data - in a real app, this would come from a backend API
const vendors = [
  { id: 1, name: 'Royal Palace', category: 'Venue', rating: 4.8, image: 'https://placehold.co/600x400/E2E8F0/333333?text=Venue' },
  { id: 2, name: 'Click Moments', category: 'Photographer', rating: 4.9, image: 'https://placehold.co/600x400/E2E8F0/333333?text=Photographer' },
  { id: 3, name: 'SpicyBites Catering', category: 'Catering', rating: 4.7, image: 'https://placehold.co/600x400/E2E8F0/333333?text=Catering' },
  { id: 4, name: 'Dream Decor', category: 'Decorator', rating: 4.6, image: 'https://placehold.co/600x400/E2E8F0/333333?text=Decorator' },
];

export default function ServiceListingPage() {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-8">
      {/* Filters Sidebar */}
      <aside className="w-full md:w-1/4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Filters</h3>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Category</label>
            <select className="w-full p-2 border rounded-md">
              <option>All</option>
              <option>Venue</option>
              <option>Photographer</option>
              <option>Catering</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-2">Price Range</label>
            <input type="range" className="w-full" />
          </div>
        </div>
      </aside>

      {/* Vendor Cards */}
      <main className="w-full md:w-3/4">
        <h2 className="text-3xl font-bold mb-6">Vendors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vendors.map(vendor => (
            <div key={vendor.id} className="bg-white border rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform">
              <img src={vendor.image} alt={vendor.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold">{vendor.name}</h4>
                <p className="text-gray-600">{vendor.category}</p>
                <p className="text-yellow-500 font-semibold">Rating: {vendor.rating} ★</p>
                <Link href={`/services/${vendor.id}`} className="mt-4 inline-block bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

