import React from 'react';
import ValuationPopup from './ValuationPopup';
import { useValuationPopup } from '../hooks/useValuationPopup';
import ConsultationPopup from './ConsultationPopup';
import { useConsultationPopup } from '../hooks/useConsultationPopup';
import { Home, ArrowLeft, Key, Users, Shield, Clock, CheckCircle, Calendar, Heart, Bath, Bed, Car } from 'lucide-react';

interface RentProps {
  onBack: () => void;
}

function Rent({ onBack }: RentProps) {
  const { isPopupOpen, openPopup, closePopup, handleUseVirtualAssistant } = useValuationPopup();
  const { isPopupOpen: isConsultationOpen, openPopup: openConsultation, closePopup: closeConsultation } = useConsultationPopup();

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
              Find Your Perfect <span className="text-blue-600">Rental</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed text-center">
              Discover exceptional rental properties across the UK with MyEstateAgent. From modern apartments 
              to family homes, we help you find the perfect rental property with expert guidance and support.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Rental Properties</h2>
            <p className="text-gray-600">Discover your perfect rental home in Leicestershire</p>
          </div>

          {/* Property Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Macey Gardens Property */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Property Image */}
              <div className="relative">
                <img 
                  src="/public/detatched istockphoto-453534627-612x612.jpg" 
                  alt="Detached house on Macey Gardens, Anstey"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    For Rent
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">£1,950 pcm</h3>
                    <p className="text-lg text-gray-600 mb-1">Macey Gardens, Anstey</p>
                    <p className="text-sm text-gray-500">Leicestershire, LE7 7AZ</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">Ref: MSA-MG-R001</span>
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
                    A stunning four-bedroom detached family home available for rent in the desirable area of Anstey. 
                    This impressive property features spacious accommodation throughout, including a large kitchen-diner, 
                    separate lounge, and master bedroom with en-suite. The property boasts a private rear garden, 
                    driveway parking for two cars, and is ideally located close to excellent schools and transport 
                    links to Leicester city centre.
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Four double bedrooms</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Large kitchen-diner with modern appliances</span>
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
                        <span className="text-gray-600">Private landscaped rear garden</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Driveway parking for 2 cars</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Gas central heating and double glazing</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Close to schools and transport links</span>
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
                    <h5 className="font-semibold text-gray-900 mb-1">Furnished</h5>
                    <p className="text-gray-600">Unfurnished</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Available From</h5>
                    <p className="text-gray-600">1st March 2025</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Deposit</h5>
                    <p className="text-gray-600">£2,340</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Council Tax</h5>
                    <p className="text-gray-600">Band E</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">EPC Rating</h5>
                    <p className="text-gray-600">C (72)</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center">
                  <button 
                    onClick={openPopup}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Book Viewing</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Fallow Close Property */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Property Image */}
              <div className="relative">
                <img 
                  src="/public/semi istockphoto-96268939-612x612.jpg" 
                  alt="Semi-detached house on Fallow Close, Willoughby Waterleys"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    For Rent
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">£1,400 pcm</h3>
                    <p className="text-lg text-gray-600 mb-1">Fallow Close, Willoughby Waterleys</p>
                    <p className="text-sm text-gray-500">Leicestershire, LE8 6UQ</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">Ref: MSA-FC-R002</span>
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
                    A beautifully presented three-bedroom semi-detached family home available for rent in the 
                    popular village of Willoughby Waterleys. This modern property features spacious accommodation 
                    throughout, including an open-plan kitchen-diner, separate lounge, and master bedroom with 
                    en-suite. The property benefits from a private rear garden, driveway parking for two cars, 
                    and is ideally located within walking distance of local amenities with excellent transport 
                    links to Leicester and surrounding areas.
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Modern semi-detached family home</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Open-plan kitchen-diner</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Separate lounge area</span>
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
                        <span className="text-gray-600">Driveway parking for 2 cars</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Gas central heating and double glazing</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Village location with good transport links</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Property Information */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg text-sm">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Property Type</h5>
                    <p className="text-gray-600">Semi-Detached House</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Furnished</h5>
                    <p className="text-gray-600">Unfurnished</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Available From</h5>
                    <p className="text-gray-600">15th February 2025</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Deposit</h5>
                    <p className="text-gray-600">£1,680</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Council Tax</h5>
                    <p className="text-gray-600">Band D</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">EPC Rating</h5>
                    <p className="text-gray-600">B (83)</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center">
                  <button 
                    onClick={openPopup}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Book Viewing</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Back Street Property */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Property Image */}
              <div className="relative">
                <img 
                  src="/public/semi 2 istockphoto-511475808-612x612.jpg" 
                  alt="Semi-detached house on Back Street, Braunstone Town"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    For Rent
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">£1,250 pcm</h3>
                    <p className="text-lg text-gray-600 mb-1">Back Street, Braunstone Town</p>
                    <p className="text-sm text-gray-500">Leicestershire, LE3 1NF</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">Ref: MSA-BS-R003</span>
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
                    <span className="text-gray-700">1 Bathroom</span>
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
                    A charming three-bedroom semi-detached family home available for rent in the established 
                    area of Braunstone Town. This well-maintained property offers comfortable living accommodation 
                    with a spacious lounge, fitted kitchen, and three good-sized bedrooms. The property features 
                    a private rear garden, driveway parking for two cars, and is conveniently located close to 
                    local amenities, schools, and transport links to Leicester city centre. Perfect for families 
                    seeking affordable rental accommodation in a friendly community.
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Three-bedroom semi-detached house</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Spacious lounge and separate dining area</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Fitted kitchen with appliances</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Three well-proportioned bedrooms</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Family bathroom with shower</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Private rear garden</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Driveway parking for 2 cars</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Close to schools and amenities</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Property Information */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg text-sm">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Property Type</h5>
                    <p className="text-gray-600">Semi-Detached House</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Furnished</h5>
                    <p className="text-gray-600">Unfurnished</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Available From</h5>
                    <p className="text-gray-600">1st February 2025</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Deposit</h5>
                    <p className="text-gray-600">£1,500</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Council Tax</h5>
                    <p className="text-gray-600">Band C</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">EPC Rating</h5>
                    <p className="text-gray-600">C (69)</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center">
                  <button 
                    onClick={openPopup}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Book Viewing</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Lutterworth Road Property */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Property Image */}
              <div className="relative">
                <img 
                  src="/detached_2_istockphoto-2191490771-612x612.jpg" 
                  alt="Detached house on Lutterworth Road, Cosby"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    For Rent
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">£2,000 pcm</h3>
                    <p className="text-lg text-gray-600 mb-1">Lutterworth Road, Cosby</p>
                    <p className="text-sm text-gray-500">Leicestershire, LE9 1RG</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">Ref: MSA-LR-R004</span>
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
                    <span className="text-gray-700">3 Parking Spaces</span>
                  </div>
                </div>

                {/* Property Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Property Description</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A magnificent four-bedroom detached period property available for rent in the picturesque 
                    village of Cosby. This characterful home combines traditional charm with modern conveniences, 
                    featuring spacious reception rooms, a farmhouse-style kitchen, and beautifully appointed 
                    bedrooms. The property sits in generous grounds with mature gardens, offering privacy and 
                    tranquility while being conveniently located for access to Leicester and surrounding areas. 
                    Perfect for families seeking a prestigious rental property in a sought-after village location.
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Four-bedroom detached period property</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Spacious reception rooms with period features</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Farmhouse-style kitchen with modern appliances</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Master bedroom with en-suite bathroom</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Mature landscaped gardens</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Private driveway and garage</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Village location with countryside views</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">Excellent transport links to Leicester</span>
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
                    <h5 className="font-semibold text-gray-900 mb-1">Furnished</h5>
                    <p className="text-gray-600">Unfurnished</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Available From</h5>
                    <p className="text-gray-600">1st April 2025</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Deposit</h5>
                    <p className="text-gray-600">£2,400</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Council Tax</h5>
                    <p className="text-gray-600">Band F</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">EPC Rating</h5>
                    <p className="text-gray-600">D (62)</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center">
                  <button 
                    onClick={openPopup}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Book Viewing</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Robin Road Property */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Property Image */}
              <div className="relative">
                <img 
                  src="/flat_istockphoto-1421422160-612x612.jpg" 
                  alt="Modern flat on Robin Road, Broughton Astley"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    For Rent
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">£800 pcm</h3>
                    <p className="text-lg text-gray-600 mb-1">Robin Road, Broughton Astley</p>
                    <p className="text-sm text-gray-500">Leicestershire, LE9 6QS</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">Ref: MSA-RR-R005</span>
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
                    A stylish two-bedroom modern flat available for rent in the popular village of Broughton Astley. 
                    This contemporary apartment features an open-plan living area with modern kitchen, two well-proportioned 
                    bedrooms, and a contemporary bathroom. The property benefits from allocated parking, communal gardens, 
                    and is ideally located for commuters with excellent transport links to Leicester and Market Harborough. 
                    Perfect for young professionals or couples seeking quality rental accommodation in a desirable location.
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
                    <h5 className="font-semibold text-gray-900 mb-1">Furnished</h5>
                    <p className="text-gray-600">Unfurnished</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Available From</h5>
                    <p className="text-gray-600">15th March 2025</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Deposit</h5>
                    <p className="text-gray-600">£960</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Council Tax</h5>
                    <p className="text-gray-600">Band B</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">EPC Rating</h5>
                    <p className="text-gray-600">B (86)</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center">
                  <button 
                    onClick={openPopup}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Book Viewing</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Renting Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us for Renting?</h2>
            <p className="text-lg text-gray-600">
              Our expert team provides comprehensive support throughout your rental journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-6">
                <Key className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Properties</h3>
              <p className="text-gray-600">
                Access to carefully vetted rental properties that meet our high standards for quality and condition.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Process</h3>
              <p className="text-gray-600">
                Professional handling of deposits, contracts, and legal requirements to protect your interests.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600">
                Dedicated support throughout your tenancy with maintenance coordination and landlord liaison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Rental Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive rental services for both tenants and landlords across the UK.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* For Tenants */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">For Tenants</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Property search and matching</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Viewing arrangements</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Application processing</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Tenancy agreement support</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Deposit protection guidance</span>
                </li>
              </ul>
            </div>

            {/* For Landlords */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <Key className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">For Landlords</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Property marketing and advertising</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Tenant screening and referencing</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Rent collection and management</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Property maintenance coordination</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Legal compliance support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Ready to Find Your Next Rental?</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Get in touch with our expert team today and let us help you find the perfect rental property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openConsultation}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Register Your Interest
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

      {/* Valuation Popup */}
      <ValuationPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        onUseVirtualAssistant={handleUseVirtualAssistant}
      />

      {/* Consultation Popup */}
      <ConsultationPopup
        isOpen={isConsultationOpen}
        onClose={closeConsultation}
      />
    </div>
  );
}

export default Rent;