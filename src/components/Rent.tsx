import React from 'react';
import { Home, ArrowLeft, Key, Users, Shield, Clock, CheckCircle, Calendar } from 'lucide-react';

interface RentProps {
  onBack: () => void;
}

function Rent({ onBack }: RentProps) {
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Rental Properties Coming Soon</h2>
            <p className="text-gray-600">We're preparing an extensive collection of rental properties for you</p>
          </div>

          {/* Placeholder Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Placeholder Card 1 */}
            <div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Key className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Property Image</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">Property Title</h3>
                  <p className="text-gray-400">Location details will appear here</p>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-gray-400">Bedrooms • Bathrooms • Features</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">Property description and key features will be displayed here</p>
                </div>
              </div>
            </div>

            {/* Placeholder Card 2 */}
            <div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Key className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Property Image</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">Property Title</h3>
                  <p className="text-gray-400">Location details will appear here</p>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-gray-400">Bedrooms • Bathrooms • Features</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">Property description and key features will be displayed here</p>
                </div>
              </div>
            </div>

            {/* Placeholder Card 3 */}
            <div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Key className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Property Image</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">Property Title</h3>
                  <p className="text-gray-400">Location details will appear here</p>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-gray-400">Bedrooms • Bathrooms • Features</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">Property description and key features will be displayed here</p>
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
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
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
    </div>
  );
}

export default Rent;