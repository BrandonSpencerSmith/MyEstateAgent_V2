import React from 'react';
import { Home, ArrowLeft, Search, Filter, MapPin, Heart, Bath, Bed, Car, Calendar } from 'lucide-react';

interface BuyProps {
  onBack: () => void;
}

function Buy({ onBack }: BuyProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="text-sm">Back to Home</span>
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <Home className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-semibold text-gray-900">MyEstateAgent</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 mx-auto max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
              Find Your Perfect <span className="text-blue-600">Home</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed text-center">
              Discover your dream property from our extensive collection of homes across the UK. 
              From cozy apartments to luxury estates, we have something for everyone.
            </p>
          </div>

        </div>
      </section>

      {/* Property Listings */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Properties</h2>
            <p className="text-gray-600">Discover your perfect home in Leicestershire</p>
          </div>

          {/* Property Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* School Lane Property */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Property Image */}
              <div className="relative">
                <img 
                  src="/public/files_4699348-1758720071500-image.png" 
                  alt="Semi-detached house on School Lane, Stoney Stanton"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    For Sale
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex flex-col justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">£250,000</h3>
                    <p className="text-lg text-gray-600 mb-1">School Lane, Stoney Stanton</p>
                    <p className="text-sm text-gray-500">Leicestershire, LE9 4EX</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">Ref: MSA-SS-001</span>
                  </div>
                </div>

                {/* Property Features */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Bed className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">3 Bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">2 Bathrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">2 Parking Spaces</span>
                  </div>
                </div>

                {/* Property Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Property Description</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A beautifully presented three-bedroom semi-detached family home situated in the popular village of Stoney Stanton. 
                    This modern property features a spacious open-plan living area, contemporary fitted kitchen, and well-appointed bedrooms. 
                    The property benefits from a private rear garden, driveway parking for two cars, and is ideally located within walking 
                    distance of local amenities and excellent transport links.
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Modern fitted kitchen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Open-plan living/dining area</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Master bedroom with en-suite</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Private rear garden</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Double glazing throughout</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Gas central heating</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Driveway parking for 2 cars</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Close to local amenities</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Property Information */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg text-sm">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Property Type</h5>
                    <p className="text-gray-600">Semi-detached House</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Tenure</h5>
                    <p className="text-gray-600">Freehold</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Council Tax</h5>
                    <p className="text-gray-600">Band C</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">EPC Rating</h5>
                    <p className="text-gray-600">B (82)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Floor Area</h5>
                    <p className="text-gray-600">1,150 sq ft</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Year Built</h5>
                    <p className="text-gray-600">2018</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Book Viewing</span>
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium">
                    Request Details
                  </button>
                </div>
              </div>
            </div>

            {/* Bumblebee Lane Property */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Property Image */}
              <div className="relative">
                <img 
                  src="/public/image.png" 
                  alt="Detached house on Bumblebee Lane, Desford"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    For Sale
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex flex-col justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">£470,000</h3>
                    <p className="text-lg text-gray-600 mb-1">Bumblebee Lane, Desford</p>
                    <p className="text-sm text-gray-500">Leicestershire, LE9 9JL</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">Ref: MSA-BL-002</span>
                  </div>
                </div>

                {/* Property Features */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Bed className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">4 Bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">3 Bathrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">2 Parking Spaces</span>
                  </div>
                </div>

                {/* Property Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Property Description</h4>
                  <p className="text-gray-600 leading-relaxed">
                    An exceptional four-bedroom detached family home in the sought-after village of Desford. This impressive property 
                    boasts spacious accommodation throughout, including a large kitchen-diner, separate lounge, and master bedroom with 
                    en-suite. The property features a private rear garden, integral garage, and driveway parking. Located close to 
                    excellent schools and with easy access to Leicester and surrounding areas.
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Large kitchen-diner with island</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Separate lounge and dining room</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Master bedroom with en-suite</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Integral garage and utility room</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Private landscaped garden</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Double glazing and gas heating</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Close to excellent schools</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Easy access to Leicester</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Property Information */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg text-sm">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Property Type</h5>
                    <p className="text-gray-600">Detached House</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Tenure</h5>
                    <p className="text-gray-600">Freehold</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Council Tax</h5>
                    <p className="text-gray-600">Band E</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">EPC Rating</h5>
                    <p className="text-gray-600">B (84)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Floor Area</h5>
                    <p className="text-gray-600">1,650 sq ft</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Year Built</h5>
                    <p className="text-gray-600">2020</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Book Viewing</span>
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium">
                    Request Details
                  </button>
                </div>
              </div>
            </div>

            {/* Ridge Road Property */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Property Image */}
              <div className="relative">
                <img 
                  src="/public/image copy.png" 
                  alt="Terraced house on Ridge Road, Thurlaston"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    For Sale
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex flex-col justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">£175,000</h3>
                    <p className="text-lg text-gray-600 mb-1">Ridge Road, Thurlaston</p>
                    <p className="text-sm text-gray-500">Leicestershire, LE9 7TH</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">Ref: MSA-RR-003</span>
                  </div>
                </div>

                {/* Property Features */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Bed className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">2 Bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">1 Bathroom</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">1 Parking Space</span>
                  </div>
                </div>

                {/* Property Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Property Description</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A charming two-bedroom terraced house in the picturesque village of Thurlaston. This well-maintained 
                    property offers comfortable living accommodation with period features and modern conveniences. The home 
                    features a cozy lounge, fitted kitchen, and two good-sized bedrooms. Located in a quiet residential 
                    area with excellent transport links to Leicester and Rugby, perfect for first-time buyers or investors.
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Period terraced house</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Two reception rooms</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Fitted kitchen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Two double bedrooms</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Family bathroom</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Rear courtyard garden</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">On-street parking</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Village location</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Property Information */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg text-sm">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Property Type</h5>
                    <p className="text-gray-600">Terraced House</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Tenure</h5>
                    <p className="text-gray-600">Freehold</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Council Tax</h5>
                    <p className="text-gray-600">Band B</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">EPC Rating</h5>
                    <p className="text-gray-600">D (65)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Floor Area</h5>
                    <p className="text-gray-600">850 sq ft</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Year Built</h5>
                    <p className="text-gray-600">1920s</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Book Viewing</span>
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium">
                    Request Details
                  </button>
                </div>
              </div>
            </div>

            {/* Lilac Drive Property */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Property Image */}
              <div className="relative">
                <img 
                  src="/public/image copy copy.png" 
                  alt="Detached house on Lilac Drive, Gilmorton"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    For Sale
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex flex-col justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">£395,000</h3>
                    <p className="text-lg text-gray-600 mb-1">Lilac Drive, Gilmorton</p>
                    <p className="text-sm text-gray-500">Leicestershire, LE17 5PQ</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">Ref: MSA-LD-004</span>
                  </div>
                </div>

                {/* Property Features */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Bed className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">4 Bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">2 Bathrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">2 Parking Spaces</span>
                  </div>
                </div>

                {/* Property Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Property Description</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A stunning four-bedroom detached family home in the popular village of Gilmorton. This modern property 
                    features spacious accommodation throughout, including a contemporary kitchen with breakfast bar, separate 
                    lounge and dining room, and master bedroom with en-suite. The property benefits from an integral garage, 
                    private rear garden, and driveway parking. Ideally located close to excellent schools and with easy 
                    access to Market Harborough and Leicester.
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Modern detached family home</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Spacious lounge and separate dining room</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Contemporary kitchen with breakfast bar</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Master bedroom with en-suite</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Integral garage and utility room</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Private landscaped rear garden</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Driveway parking for multiple cars</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Close to excellent schools</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Property Information */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg text-sm">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Property Type</h5>
                    <p className="text-gray-600">Detached House</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Tenure</h5>
                    <p className="text-gray-600">Freehold</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Council Tax</h5>
                    <p className="text-gray-600">Band D</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">EPC Rating</h5>
                    <p className="text-gray-600">B (81)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Floor Area</h5>
                    <p className="text-gray-600">1,450 sq ft</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Year Built</h5>
                    <p className="text-gray-600">2019</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Book Viewing</span>
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium">
                    Request Details
                  </button>
                </div>
              </div>
            </div>

            {/* Pebble Rise Property */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Property Image */}
              <div className="relative">
                <img 
                  src="/public/image copy copy copy.png" 
                  alt="Modern flat on Pebble Rise, Elmesthorpe"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    For Sale
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex flex-col justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">£145,000</h3>
                    <p className="text-lg text-gray-600 mb-1">Pebble Rise, Elmesthorpe</p>
                    <p className="text-sm text-gray-500">Leicestershire, LE9 7RF</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">Ref: MSA-PR-005</span>
                  </div>
                </div>

                {/* Property Features */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Bed className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">2 Bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">1 Bathroom</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">1 Parking Space</span>
                  </div>
                </div>

                {/* Property Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Property Description</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A stylish two-bedroom modern flat in the sought-after development of Pebble Rise, Elmesthorpe. 
                    This contemporary apartment features an open-plan living area with modern kitchen, two well-proportioned 
                    bedrooms, and a contemporary bathroom. The property benefits from allocated parking, communal gardens, 
                    and is ideally located for commuters with excellent transport links to Leicester and Hinckley. Perfect 
                    for first-time buyers or buy-to-let investors.
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Modern purpose-built flat</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Open-plan living/kitchen area</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Contemporary fitted kitchen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Two double bedrooms</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Modern bathroom suite</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Allocated parking space</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Communal gardens</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Excellent transport links</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Property Information */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg text-sm">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Property Type</h5>
                    <p className="text-gray-600">Flat/Apartment</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Tenure</h5>
                    <p className="text-gray-600">Leasehold</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Council Tax</h5>
                    <p className="text-gray-600">Band A</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">EPC Rating</h5>
                    <p className="text-gray-600">B (85)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Floor Area</h5>
                    <p className="text-gray-600">650 sq ft</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Year Built</h5>
                    <p className="text-gray-600">2021</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Book Viewing</span>
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium">
                    Request Details
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us for Buying?</h2>
            <p className="text-lg text-gray-600">
              Our expert team provides comprehensive support throughout your property buying journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-6">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Search</h3>
              <p className="text-gray-600">
                Access to exclusive properties and expert market knowledge to find your perfect home.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Service</h3>
              <p className="text-gray-600">
                Dedicated property consultant to understand your needs and guide you through the entire process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-6">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Full Support</h3>
              <p className="text-gray-600">
                From viewings to completion, we coordinate with solicitors, surveyors, and mortgage advisors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Ready to Start Your Property Search?</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Get in touch with our expert team today and let us help you find your dream home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Book Free Consultation
            </button>
            <button 
              onClick={onBack}
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Buy;