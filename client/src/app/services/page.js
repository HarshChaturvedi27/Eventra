'use client';

import { useState, useEffect } from 'react'; // Added useEffect
import { useSearchParams } from 'next/navigation'; // To read URL parameters
import Link from 'next/link';
import { Star, LayoutGrid, Camera, UtensilsCrossed, Flower2, Building, MapPin } from 'lucide-react'; // Added MapPin

// --- UPDATED: Added City to Vendor Data ---
const allVendors = [
  { id: 1, name: 'Umaid Bhawan Palace', category: 'Venue', city: 'Jodhpur', rating: 4.9, price: 450000, image: 'https://images.pexels.com/photos/2775273/pexels-photo-2775273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { id: 2, name: 'DotDusk Studios', category: 'Photographer', city: 'Delhi', rating: 4.9, price: 180000, image: 'https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { id: 3, name: 'Indian Accent Catering', category: 'Catering', city: 'Delhi', rating: 4.8, price: 80000, image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { id: 4, name: 'Abhinav Bhagat Events', category: 'Decorator', city: 'Mumbai', rating: 4.8, price: 220000, image: 'https://images.pexels.com/photos/1449775/pexels-photo-1449775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { id: 5, name: 'The Oberoi Udaivilas', category: 'Venue', city: 'Udaipur', rating: 5.0, price: 420000, image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { id: 6, name: 'Stories by Joseph Radhik', category: 'Photographer', city: 'Mumbai', rating: 5.0, price: 250000, image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { id: 7, name: 'The Floral Hub', category: 'Decorator', city: 'Bangalore', rating: 4.6, price: 95000, image: 'https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { id: 8, name: 'Bukhara Catering', category: 'Catering', city: 'Delhi', rating: 4.9, price: 220000, image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { id: 9, name: 'Taj Falaknuma Palace', category: 'Venue', city: 'Hyderabad', rating: 5.0, price: 500000, image: 'https://images.pexels.com/photos/16694318/pexels-photo-16694318/free-photo-of-a-large-hall-with-chandeliers-and-a-long-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { id: 10, name: 'Ramit Batra Photography', category: 'Photographer', city: 'Delhi', rating: 4.8, price: 150000, image: 'https://images.pexels.com/photos/3290072/pexels-photo-3290072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { id: 11, name: 'Devika Narain & Company', category: 'Decorator', city: 'Delhi', rating: 4.9, price: 300000, image: 'https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { id: 12, name: 'The Leela Palace Udaipur', category: 'Venue', city: 'Udaipur', rating: 4.9, price: 480000, image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
];

const categories = [
    { name: 'All', icon: LayoutGrid },
    { name: 'Venue', icon: Building },
    { name: 'Photographer', icon: Camera },
    { name: 'Catering', icon: UtensilsCrossed },
    { name: 'Decorator', icon: Flower2 },
];
// --- NEW: List of cities based on vendor data ---
const availableCities = ['All', ...new Set(allVendors.map(v => v.city))];

export default function ServiceListingPage() {
  const searchParams = useSearchParams(); // Hook to read URL parameters
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';

  // --- UPDATED: Added city filter state ---
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedCity, setSelectedCity] = useState('All'); // New state for city
  const [priceValue, setPriceValue] = useState(500000);
  const [searchTerm, setSearchTerm] = useState(initialSearch); // State for search term

  // --- NEW: Effect to update filters if URL params change ---
   useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'All');
    setSearchTerm(searchParams.get('search') || '');
    // We could also add city param here later if needed
  }, [searchParams]);


  // --- UPDATED: Filtering logic now includes city and search ---
  const filteredVendors = allVendors.filter(vendor => {
    const categoryMatch = selectedCategory === 'All' || vendor.category === selectedCategory;
    const cityMatch = selectedCity === 'All' || vendor.city === selectedCity;
    const priceMatch = vendor.price <= priceValue;
    // Simple search: check if name, category or city includes the search term (case-insensitive)
    const searchMatch = !searchTerm || 
                        vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        vendor.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        vendor.city.toLowerCase().includes(searchTerm.toLowerCase());
                        
    return categoryMatch && cityMatch && priceMatch && searchMatch;
  });

  return (
    <div className="bg-gray-50 pt-20">
      <header className="bg-pink-50/70 py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Find The Perfect Vendor</h1>
          <p className="mt-2 text-lg text-gray-600">Browse our curated selection of top-rated event professionals.</p>
           {/* --- NEW: Displaying active search term --- */}
           {searchTerm && (
             <p className="mt-4 text-md text-gray-700 font-medium">
               Showing results for: <span className="text-pink-600">{searchTerm}</span>
             </p>
           )}
        </div>
      </header>

      <div className="container mx-auto p-6 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <div className="p-6 bg-white rounded-xl shadow-lg sticky top-28">
            <h3 className="text-xl font-bold mb-6 text-gray-800">Filters</h3>
            <div className="space-y-8">
              {/* Category Filter */}
              <div>
                <label className="block font-semibold mb-3 text-gray-700">Category</label>
                <div className="flex flex-wrap gap-2">
                    {categories.map(({ name, icon: Icon }) => (
                        <button 
                            key={name} 
                            onClick={() => setSelectedCategory(name)}
                            className={`flex items-center space-x-2 py-2 px-3 rounded-lg text-sm transition-all duration-200 ${selectedCategory === name ? 'bg-pink-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            <Icon className="h-4 w-4"/>
                            <span>{name}</span>
                        </button>
                    ))}
                </div>
              </div>
              {/* --- NEW: City Filter --- */}
              <div>
                <label className="block font-semibold mb-2 text-gray-700">City</label>
                 <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
                 >
                    {availableCities.map(city => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                 </select>
              </div>
              {/* Price Range Filter */}
              <div>
                <label className="block font-semibold mb-2 text-gray-700">
                  Price Range
                </label>
                <input 
                  type="range" 
                  min="10000" 
                  max="500000" 
                  step="10000" 
                  value={priceValue}
                  onChange={(e) => setPriceValue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500" 
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>₹10k</span>
                    <span className="font-bold text-pink-600">
                      Up to ₹{new Intl.NumberFormat('en-IN').format(priceValue)}
                    </span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="w-full md:w-3/4 lg:w-4/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVendors.length > 0 ? (
              filteredVendors.map(vendor => (
                <div key={vendor.id} className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-1 transition-all duration-300">
                  <div className="relative">
                    <img src={vendor.image} alt={vendor.name} className="w-full h-56 object-cover" />
                    <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                      <Star className="w-4 h-4 text-amber-500" fill="currentColor" />
                      <span className="font-bold text-gray-800">{vendor.rating}</span>
                    </div>
                     {/* --- NEW: Display City on Card --- */}
                     <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                        <MapPin size={12} />
                        <span>{vendor.city}</span>
                     </div>
                  </div>
                  <div className="p-5 flex flex-col">
                    <h4 className="text-xl font-bold text-gray-800 truncate">{vendor.name}</h4>
                    <p className="text-gray-500 mb-4">{vendor.category}</p>
                    <Link href={`/services/${vendor.id}`} className="mt-auto w-full text-center inline-block bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-gray-500 text-lg">No vendors match the current filters.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

