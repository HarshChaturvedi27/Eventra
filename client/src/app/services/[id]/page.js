'use client';

import Link from 'next/link';
import { Star, Info, ImageIcon, Sparkles, MessageSquare, HeartHandshake, CheckCircle, MapPin } from 'lucide-react'; // Added MapPin

// --- UPDATED: Added City ---
const vendor = {
  id: 1,
  name: 'Umaid Bhawan Palace',
  category: 'Venue',
  city: 'Jodhpur', // Added City
  rating: 4.9,
  reviewCount: 188,
  price: 'Starts at ₹4,50,000',
  images: [
    'https://images.pexels.com/photos/2775273/pexels-photo-2775273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/14879122/pexels-photo-14879122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/16694318/pexels-photo-16694318/free-photo-of-a-large-hall-with-chandeliers-and-a-long-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ],
  about: "Nestled high above the desert capital of Jodhpur, Umaid Bhawan Palace is a golden-hued desert sandstone monument and the last of the great palaces of India...", // Shortened for brevity
  services: ["Royal Suites & Rooms", "Grand Ballroom for 500+ guests", "In-house Gourmet Catering", "Dedicated Wedding Planners", "Spa & Wellness Center"],
  whyChooseUs: "Experience the epitome of luxury and heritage...", // Shortened for brevity
  reviews: [
    { name: 'Priya & Rohan', rating: 5, comment: "An absolute dream venue..." }, // Shortened
    { name: 'Anjali S.', rating: 5, comment: "There is no place like it..." }, // Shortened
  ]
};

// --- UPDATED: Added City ---
const similarVendors = [
  { id: 5, name: 'The Oberoi Udaivilas', category: 'Venue', city: 'Udaipur', image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { id: 9, name: 'Taj Falaknuma Palace', category: 'Venue', city: 'Hyderabad', image: 'https://images.pexels.com/photos/16694318/pexels-photo-16694318/free-photo-of-a-large-hall-with-chandeliers-and-a-long-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { id: 12, name: 'The Leela Palace', category: 'Venue', city: 'Udaipur', image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
];

export default function VendorDetailPage({ params }) {
  
  return (
    <div className="bg-gray-50 pt-20">
      {/* --- UPDATE: Constrained width --- */}
      <div className="container mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
        
        {/* Intro Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Gallery Preview */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-96">
            <img src={vendor.images[0]} alt="Main" className="w-full h-full object-cover rounded-xl col-span-2 row-span-2" />
          </div>

          {/* Vendor Info */}
          <div className="flex flex-col justify-center">
            {/* --- UPDATE: Added City display --- */}
            <div className="flex items-center justify-between mb-1">
              <p className="text-pink-600 font-semibold">{vendor.category}</p>
              <div className="flex items-center space-x-1 text-gray-500 text-sm">
                  <MapPin size={14}/>
                  <span>{vendor.city}</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold my-1 text-gray-800">{vendor.name}</h1>
            <div className="flex items-center space-x-2 text-gray-600 mb-6">
              <Star className="w-5 h-5 text-amber-500" fill="currentColor" />
              <span className="font-bold">{vendor.rating}</span>
              <span>({vendor.reviewCount} reviews)</span>
            </div>
            <p className="text-3xl font-semibold text-gray-800 mb-8">{vendor.price}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/checkout" className="w-full text-center bg-pink-600 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-pink-700 transition-colors">Book Now</Link>
              <button className="w-full text-center bg-gray-200 text-gray-800 py-3 px-6 rounded-lg text-lg font-bold hover:bg-gray-300 transition-colors">Enquiry</button>
            </div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
             <Section icon={Info} title="About">
              <p className="text-gray-600 leading-relaxed">{vendor.about}</p>
            </Section>
            <Section icon={Sparkles} title="Services Offered">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {vendor.services.map(service => (
                  <li key={service} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </Section>
            <Section icon={ImageIcon} title="Gallery">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {vendor.images.map((img, i) => <img key={i} src={img} alt={`Gallery image ${i+1}`} className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" />)}
              </div>
            </Section>
            <Section icon={HeartHandshake} title="Why Choose Us">
                <p className="text-gray-600 leading-relaxed">{vendor.whyChooseUs}</p>
            </Section>
            <Section icon={MessageSquare} title="Reviews">
              <div className="space-y-6">
                {vendor.reviews.map(review => (
                  <div key={review.name} className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="font-bold text-gray-800">{review.name}</div>
                      <div className="flex items-center ml-auto">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-500" fill="currentColor"/>)}
                      </div>
                    </div>
                    <p className="text-gray-600">&ldquo;{review.comment}&rdquo;</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Right Column: Sticky Card */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800">{vendor.name}</h3>
                {/* --- UPDATE: Added city --- */}
                 <div className="flex items-center space-x-1 text-gray-500 text-sm mt-1">
                    <MapPin size={14}/>
                    <span>{vendor.city}</span>
                </div>
                <p className="text-gray-600 mt-2">{vendor.price}</p>
                <div className="flex flex-col gap-3 mt-6">
                  <Link href="/checkout" className="w-full text-center bg-pink-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-pink-700 transition-colors">Book Now</Link>
                  <button className="w-full text-center bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition-colors">Enquiry</button>
                </div>
            </div>
          </aside>
        </div>

        {/* You May Also Like Section */}
        <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {similarVendors.map(sv => (
                    <div key={sv.id} className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-1 transition-all duration-300">
                        <div className="relative">
                            <img src={sv.image} alt={sv.name} className="w-full h-56 object-cover" />
                             {/* --- UPDATE: Added city --- */}
                             <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                                <MapPin size={12} />
                                <span>{sv.city}</span>
                             </div>
                        </div>
                        <div className="p-5">
                            <h4 className="text-xl font-bold text-gray-800 truncate">{sv.name}</h4>
                            <p className="text-gray-500 mb-4">{sv.category}</p>
                            <Link href={`/services/${sv.id}`} className="w-full text-center inline-block bg-pink-100 text-pink-700 font-semibold py-2 px-4 rounded-lg hover:bg-pink-200 transition-colors">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

const Section = ({ icon: Icon, title, children }) => (
  <section>
    <div className="flex items-center space-x-3 mb-6">
      <Icon className="w-7 h-7 text-pink-600" />
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    {children}
  </section>
);

