export default function CheckoutPage() {
  return (
    <div className="container mx-auto p-8 max-w-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Confirm Your Booking</h1>
      <form className="bg-white p-8 rounded-lg shadow-xl">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input type="text" id="name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
          <input type="email" id="email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" required />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
          <input type="tel" id="phone" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" required />
        </div>
        <button type="button" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-transform transform hover:scale-105">
          Proceed to Payment (Dummy)
        </button>
      </form>
    </div>
  );
}
