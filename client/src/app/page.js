export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center z-10 p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Find Your Perfect Event Vendor</h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-md">The best vendors in Bihar for your special day.</p>
          <div className="w-full max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for vendors, services..." 
              className="w-full p-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-pink-300" 
            />
          </div>
        </div>
      </div>

      {/* Popular Services Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Popular Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {['Venues', 'Photographers', 'Catering', 'Decorators'].map(service => (
            <div key={service} className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
              <h3 className="font-semibold text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}