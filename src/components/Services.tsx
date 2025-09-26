import React from 'react';
import ValuationPopup from './ValuationPopup';
import { useValuationPopup } from '../hooks/useValuationPopup';
import { Home, ArrowLeft, Search, TrendingUp, Key, Users, Award, Clock, CheckCircle, Calendar, Star, Phone, Mail, MapPin, Target, Shield, Zap, Camera, Heart } from 'lucide-react';

interface ServicesProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

function Services({ onBack, onNavigate }: ServicesProps) {
  const { isPopupOpen, openPopup, closePopup, handleUseVirtualAssistant } = useValuationPopup();

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
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 mx-auto max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From first-time buyers to seasoned investors, we provide comprehensive estate agency services 
              tailored to your needs. Discover how our expertise can help you achieve your property goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Buying */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center flex flex-col h-full">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Property Buying</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                Find your dream home with our extensive property database and expert guidance throughout the buying process.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6 flex-grow">
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Comprehensive property search</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Market analysis and valuations</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Mortgage advice and support</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Legal process coordination</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Viewing arrangements</span>
                </li>
              </ul>
              <div className="mt-auto">
                <button 
                onClick={() => onNavigate('buy')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium w-full"
                >
                Start Property Search
                </button>
              </div>
            </div>

            {/* Renting a Property */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center flex flex-col h-full">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <Home className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Renting a Property</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                Find your ideal rental home with our extensive portfolio of quality properties and dedicated tenant support services.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6 flex-grow">
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Extensive property portfolio</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Viewing coordination</span>
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
                  <span>Ongoing tenant support</span>
                </li>
              </ul>
              <div className="mt-auto">
                <button 
                onClick={() => onNavigate('rent')}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium w-full"
                >
                Find Rental Properties
                </button>
              </div>
            </div>

            {/* Selling */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center flex flex-col h-full">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Property Selling</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                Get the best price for your property with our comprehensive marketing strategy and expert valuation services.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6 flex-grow">
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Free property valuations</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Professional photography</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Multi-platform marketing</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Negotiation expertise</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Sale progression management</span>
                </li>
              </ul>
              <div className="mt-auto">
                <button 
                  onClick={openPopup}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium w-full"
                >
                  Get Free Valuation
                </button>
              </div>
            </div>

            {/* Lettings & Management */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center flex flex-col h-full">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <Key className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Lettings & Management</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                Professional lettings and property management services for landlords seeking reliable rental income.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6 flex-grow">
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Tenant finding and vetting</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Full property management</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Legal compliance support</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Rent collection and accounting</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Maintenance coordination</span>
                </li>
              </ul>
              <div className="mt-auto">
                <button 
                onClick={() => onNavigate('landlord')}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium w-full"
                >
                Landlord Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">
              Beyond buying, selling, and renting, we offer specialized services to support all your property needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Valuations */}
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Property Valuations</h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional RICS-qualified valuations for insurance, probate, matrimonial, or investment purposes.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Insurance valuations</li>
                <li>• Probate valuations</li>
                <li>• Investment appraisals</li>
                <li>• Market rent assessments</li>
              </ul>
            </div>

            {/* Investment Advice */}
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Investment Advice</h3>
              <p className="text-gray-600 text-sm mb-4">
                Expert guidance for property investors looking to build or expand their portfolio.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Portfolio analysis</li>
                <li>• Yield calculations</li>
                <li>• Market insights</li>
                <li>• Investment strategies</li>
              </ul>
            </div>

            {/* Commercial Property */}
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Commercial Property</h3>
              <p className="text-gray-600 text-sm mb-4">
                Specialized services for commercial property transactions and business relocations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Office spaces</li>
                <li>• Retail premises</li>
                <li>• Industrial units</li>
                <li>• Business valuations</li>
              </ul>
            </div>

            {/* Mortgage Services */}
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Mortgage Services</h3>
              <p className="text-gray-600 text-sm mb-4">
                Independent mortgage advice through our qualified advisors and trusted partners.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• First-time buyer mortgages</li>
                <li>• Remortgaging advice</li>
                <li>• Buy-to-let mortgages</li>
                <li>• Protection insurance</li>
              </ul>
            </div>

            {/* Legal Services */}
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-red-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Award className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Services</h3>
              <p className="text-gray-600 text-sm mb-4">
                Conveyancing and legal support through our network of qualified solicitors.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Conveyancing services</li>
                <li>• Contract reviews</li>
                <li>• Legal compliance</li>
                <li>• Dispute resolution</li>
              </ul>
            </div>

            {/* Property Management */}
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-indigo-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Key className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Property Management</h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive property management services for landlords and property investors.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Tenant management</li>
                <li>• Maintenance coordination</li>
                <li>• Rent collection</li>
                <li>• Property inspections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-gray-600">
              Our commitment to excellence and client satisfaction sets us apart in the competitive UK property market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600 text-sm">Qualified professionals with deep local knowledge and years of experience.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Service</h3>
              <p className="text-gray-600 text-sm">Dedicated, personalised service tailored to your unique needs and circumstances.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Trusted & Regulated</h3>
              <p className="text-gray-600 text-sm">Fully regulated by RICS and member of property ombudsman schemes.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Response</h3>
              <p className="text-gray-600 text-sm">Fast response times and proactive communication throughout your journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today for a free consultation and let us help you with your property needs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-lg mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">01234 567890</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-lg mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">hello@myestateagent.co.uk</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-3 rounded-lg mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">High Street, Leicestershire</p>
            </div>
          </div>
          
          <button 
            onClick={() => alert('Consultation booking feature coming soon!')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
          >
            Book Your Free Consultation
          </button>
        </div>
      </section>

      {/* Valuation Popup */}
      <ValuationPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        onUseVirtualAssistant={handleUseVirtualAssistant}
      />
    </div>
  );
}

export default Services;