'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Building, Camera, UtensilsCrossed, Flower2 } from 'lucide-react';

// Use the same city and category lists for consistency
const indianCities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur'];
const categories = ['Venue', 'Photographer', 'Catering', 'Decorator'];

export default function BecomeAVendorPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    businessName: '',
    city: indianCities[0],
    category: categories[0],
    description: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Universal handler for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Step 1: Handle Account Creation
  const handleAccountCreation = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }

    try {
      // Create the user in Firebase Auth
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      // Move to the next step
      setStep(2);
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already in use.');
      } else {
        setError('Failed to create account. Please try again.');
      }
      console.error(err);
    }
    setLoading(false);
  };

  // Step 2: Handle Business Details Submission
  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // --- FUTURE BACKEND INTEGRATION ---
    // At this point, the user (currentUser) is already logged in.
    // We would get their auth UID (auth.currentUser.uid)
    // and send the full formData (businessName, city, etc.)
    // along with the UID to our backend API (e.g., POST /api/vendors).
    // The backend would save this in the database with a status of 'Pending'.
    // --- END ---

    // For now, we'll just simulate a successful submission.
    console.log("Submitting application:", formData);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    
    setLoading(false);
    // Move to the final step
    setStep(3);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-24 pb-12">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-xl">
        
        {/* Step Indicator */}
        <div className="flex justify-between items-center mb-6">
            <span className={`text-sm font-medium ${step >= 1 ? 'text-pink-600' : 'text-gray-400'}`}>Step 1: Account</span>
            <span className={`h-px w-full mx-4 ${step >= 2 ? 'bg-pink-600' : 'bg-gray-200'}`}></span>
            <span className={`text-sm font-medium ${step >= 2 ? 'text-pink-600' : 'text-gray-400'}`}>Step 2: Details</span>
             <span className={`h-px w-full mx-4 ${step >= 3 ? 'bg-pink-600' : 'bg-gray-200'}`}></span>
            <span className={`text-sm font-medium ${step >= 3 ? 'text-pink-600' : 'text-gray-400'}`}>Step 3: Finish</span>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* --- STEP 1: ACCOUNT CREATION --- */}
        {step === 1 && (
          <form onSubmit={handleAccountCreation} className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Vendor Account</h2>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
            </div>
            <div>
              <button type="submit" disabled={loading} className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-pink-700 transition-colors disabled:bg-gray-400">
                {loading ? 'Creating...' : 'Create Account & Continue'}
              </button>
            </div>
          </form>
        )}

        {/* --- STEP 2: BUSINESS DETAILS --- */}
        {step === 2 && (
          <form onSubmit={handleSubmitApplication} className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Tell Us About Your Business</h2>
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
              <input type="text" name="businessName" id="businessName" value={formData.businessName} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <select name="city" id="city" value={formData.city} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white">
                {indianCities.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select name="category" id="category" value={formData.category} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white">
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
              <textarea name="description" id="description" rows="3" value={formData.description} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Tell customers what makes your service special..."></textarea>
            </div>
            <div>
              <button type="submit" disabled={loading} className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-colors disabled:bg-gray-400">
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        )}

        {/* --- STEP 3: SUCCESS --- */}
        {step === 3 && (
          <div className="text-center">
            <div className="flex justify-center mb-4">
               <CheckCircle size={64} className="text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for registering! Your application is now pending review by our team. We will notify you at <span className="font-medium text-gray-900">{formData.email}</span> once it's approved.
            </p>
            <button onClick={() => router.push('/')} className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-pink-700 transition-colors">
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
