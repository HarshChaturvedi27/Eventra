export default function HomePage() {
  const services = [
    { name: 'Venues', image: 'https://images.pexels.com/photos/13045953/pexels-photo-13045953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Photographers', image: 'https://images.pexels.com/photos/3297355/pexels-photo-3297355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Catering', image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Decorators', image: 'https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center z-10 p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">Your Dream Event, Perfectly Planned</h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">Find and book the best event professionals in Bihar.</p>
          <div className="w-full max-w-2xl mx-auto bg-white/20 backdrop-blur-sm p-2 rounded-full">
            <input 
              type="text" 
              placeholder="Search for venues, photographers, and more..." 
              className="w-full p-4 bg-transparent rounded-full text-white placeholder-gray-200 focus:outline-none" 
            />
          </div>
        </div>
      </div>

      {/* Popular Services Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#2C3E50]">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <div key={service.name} className="relative rounded-lg shadow-xl overflow-hidden h-80 group">
              <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

