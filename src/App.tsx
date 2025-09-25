import React from 'react';
import About from './components/About';
import Buy from './components/Buy';
import Rent from './components/Rent';
import Sell from './components/Sell';
import Services from './components/Services';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import { Home, Key, Users, Phone, Mail, MapPin, Search, Heart, TrendingUp } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'about' | 'buy' | 'sell' | 'rent' | 'services' | 'privacy' | 'terms' | 'cookies'>('home');

  // Scroll to top when navigating to a new page
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (currentPage === 'about') {
    return <About onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'buy') {
    return <Buy onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'sell') {
    return <Sell onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'rent') {
    return <Rent onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'services') {
    return <Services onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'cookies') {
    return <CookiePolicy onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-3 sm:h-16">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">MyEstateAgent</span>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-3 sm:mt-0 w-full sm:w-auto">
              <button 
                onClick={() => setCurrentPage('buy')}
                className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm sm:text-base font-medium min-w-[60px] text-center"
              >
                Buy
              </button>
              <button 
                onClick={() => setCurrentPage('sell')}
                className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm sm:text-base font-medium min-w-[60px] text-center"
              >
                Sell
              </button>
              <button 
                onClick={() => setCurrentPage('rent')}
                className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm sm:text-base font-medium min-w-[60px] text-center"
              >
                Rent
              </button>
              <button 
                onClick={() => setCurrentPage('services')}
                className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm sm:text-base font-medium min-w-[60px] text-center"
              >
                Services
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm sm:text-base font-medium min-w-[60px] text-center"
              >
                About
              </button>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm sm:text-base font-medium min-w-[60px] text-center">Contact</a>
            </nav>
            
            <div className="hidden sm:flex items-center space-x-4">
              <a href="tel:+441234567890" className="hidden sm:flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">01234 567890</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 mx-auto max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Find Your Perfect <span className="text-blue-600">Home</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover exceptional properties across the UK with MyEstateAgent. From charming cottages to luxury estates, 
              we help you find the home of your dreams with expert guidance every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('buy')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
              >
                Browse Properties
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium text-lg">
                Book Free Valuation
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Properties Sold</p>
                  <p className="text-2xl font-bold text-gray-900">2,500+</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Happy Clients</p>
                  <p className="text-2xl font-bold text-gray-900">5,000+</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Years Experience</p>
                  <p className="text-2xl font-bold text-gray-900">15+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              From first-time buyers to seasoned investors, we provide comprehensive estate agency services tailored to your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Buying */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Buying</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                Find your dream home with our extensive property database and expert guidance throughout the buying process.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2 justify-center text-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Property search assistance</span>
                </li>
                <li className="flex items-center space-x-2 justify-center text-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Mortgage advice</span>
                </li>
                <li className="flex items-center space-x-2 justify-center text-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Legal support coordination</span>
                </li>
              </ul>
            </div>

            {/* Selling */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Selling</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                Get the best price for your property with our comprehensive marketing strategy and expert valuation services.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2 justify-center text-center">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>Free property valuations</span>
                </li>
                <li className="flex items-center space-x-2 justify-center text-center">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>Professional photography</span>
                </li>
                <li className="flex items-center space-x-2 justify-center text-center">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>Multi-platform marketing</span>
                </li>
              </ul>
            </div>

            {/* Renting */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <Key className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Renting</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                Whether you're a tenant or landlord, we provide complete letting services with full property management options.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2 justify-center text-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  <span>Tenant matching</span>
                </li>
                <li className="flex items-center space-x-2 justify-center text-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  <span>Property management</span>
                </li>
                <li className="flex items-center space-x-2 justify-center text-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  <span>Legal compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose MyEstateAgent?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0 mx-auto">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Local Expertise</h3>
                    <p className="text-gray-600 text-center">Deep knowledge of UK property markets with local insights that matter.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0 mx-auto">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Personal Service</h3>
                    <p className="text-gray-600 text-center">Dedicated support throughout your property journey with a personal touch.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0 mx-auto">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Proven Results</h3>
                    <p className="text-gray-600 text-center">Track record of successful transactions and satisfied clients across the UK.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
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
          
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
            Book Your Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Home className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900">MyEstateAgent</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-600">
              <button 
                onClick={() => setCurrentPage('privacy')}
                className="hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setCurrentPage('terms')}
                className="hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => setCurrentPage('cookies')}
                className="hover:text-blue-600 transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-100 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2025 MyEstateAgent. All rights reserved. Regulated by RICS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;