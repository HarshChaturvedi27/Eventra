import Link from 'next/link';

export default function VendorDetailPage({ params }) {
  // In a real app, you'd fetch data based on params.id
  const vendor = {
    id: params.id,
    name: 'Royal Palace',
    description: 'A beautiful palace for grand weddings. Located in the heart of Patna, offering world-class amenities and service for a truly memorable celebration.',
    price: 'Starts at ₹2,00,000',
    reviews: ['Excellent service!', 'Made our day magical.', 'The staff was incredibly helpful.'],
  };

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white p-8 rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <img src="https://placehold.co/800x600/CBD5E0/333333?text=Main+Image" alt="Main Vendor Image" className="w-full h-96 object-cover rounded-lg mb-4" />
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map(i => (
              <img key={i} src={`https://placehold.co/200x200/E2E8F0/444444?text=Img+${i}`} alt={`Thumbnail ${i}`} className="h-24 w-full object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" />
            ))}
          </div>
        </div>

        {/* Vendor Info */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">{vendor.name}</h1>
          <p className="text-lg text-gray-600 mb-6 flex-grow">{vendor.description}</p>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Reviews</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {vendor.reviews.map((review, index) => <li key={index}>{review}</li>)}
            </ul>
          </div>
          <p className="text-3xl font-semibold text-pink-600 mb-6">{vendor.price}</p>
          <Link href="/checkout" className="w-full text-center bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-green-600 transition-colors">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}