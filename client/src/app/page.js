'use client'; 

import { Search, Building, Camera, UtensilsCrossed, Flower2, Award, HeartHandshake, Wallet } from 'lucide-react';

export default function HomePage() {
  const popularServices = [
    { name: 'Venues', icon: Building, color: 'text-rose-500', bgColor: 'bg-rose-50' },
    { name: 'Photographers', icon: Camera, color: 'text-sky-500', bgColor: 'bg-sky-50' },
    { name: 'Catering', icon: UtensilsCrossed, color: 'text-amber-500', bgColor: 'bg-amber-50' },
    { name: 'Decorators', icon: Flower2, color: 'text-teal-500', bgColor: 'bg-teal-50' },
  ];

  const features = [
      { name: 'Vetted Quality', description: 'Every vendor on our platform is hand-picked and verified for quality and reliability.', icon: Award },
      { name: 'Trusted Partners', description: 'We connect you with the most trusted and celebrated event professionals in the region.', icon: HeartHandshake },
      { name: 'Transparent Pricing', description: 'No hidden fees. Compare prices and packages from multiple vendors upfront.', icon: Wallet },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center z-10 p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Find Your Perfect Event Vendor</h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-md">The best vendors in Bihar for your special day.</p>
          <div className="w-full max-w-2xl mx-auto relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Search for venues, photographers, catering..." 
              className="w-full p-4 pl-12 rounded-full text-gray-800 bg-white/90 focus:outline-none focus:ring-4 focus:ring-pink-300 shadow-lg" 
            />
          </div>
        </div>
      </div>

      {/* --- V3: IMPROVED "CONNECTED" POPULAR SERVICES SECTION --- */}
      <div className="relative z-10">
          <div className="container mx-auto px-6 -mt-16">
              <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
                  <div className="text-center">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">Explore Popular Services</h2>
                      <p className="mt-4 text-lg text-gray-600">Find the perfect vendor for every aspect of your event.</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                      {popularServices.map(service => {
                          const Icon = service.icon;
                          return (
                              <div key={service.name} className="flex flex-col items-center p-4 text-center rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
                                  <div className={`p-4 rounded-full ${service.bgColor}`}>
                                      <Icon className={`h-8 w-8 ${service.color}`} />
                                  </div>
                                  <h3 className="font-semibold text-lg mt-4 text-gray-700">{service.name}</h3>
                              </div>
                          );
                      })}
                  </div>
              </div>
          </div>
      </div>
      
      {/* --- NEW "WHY CHOOSE US" SECTION FOR BETTER FLOW --- */}
      <div className="bg-pink-50/50 py-16 sm:py-24">
        <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">Your Event, Perfected</h2>
              <p className="mt-4 text-lg text-gray-600">We bring trust, quality, and simplicity to your event planning.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.name}>
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pink-600 text-white mx-auto">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="mt-5">
                      <h3 className="text-lg font-semibold leading-6 text-gray-900">{feature.name}</h3>
                      <p className="mt-2 text-base leading-6 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>
      </div>
    </div>
  );
}

