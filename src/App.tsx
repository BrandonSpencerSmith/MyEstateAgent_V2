import React from 'react';
import ValuationPopup from './components/ValuationPopup';
import ConsultationPopup from './components/ConsultationPopup';
import { useValuationPopup } from './hooks/useValuationPopup';
import { useConsultationPopup } from './hooks/useConsultationPopup';
import About from './components/About';
import Buy from './components/Buy';
import Rent from './components/Rent';
import Sell from './components/Sell';
import Services from './components/Services';
import Landlord from './components/Landlord';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import { Home, Key, Users, Phone, Mail, MapPin, Search, Heart, TrendingUp } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'about' | 'buy' | 'sell' | 'rent' | 'landlord' | 'services' | 'privacy' | 'terms' | 'cookies'>('home');
  const { isPopupOpen, openPopup, closePopup, handleUseVirtualAssistant } = useValuationPopup();
  const { isPopupOpen: isConsultationOpen, openPopup: openConsultation, closePopup: closeConsultation } = useConsultationPopup();

  // Scroll to top when navigating to a new page
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const pages = {
    about: <About onBack={() => setCurrentPage('home')} />,
    buy: <Buy onBack={() => setCurrentPage('home')} />,
    sell: <Sell onBack={() => setCurrentPage('home')} />,
    rent: <Rent onBack={() => setCurrentPage('home')} />,
    landlord: <Landlord onBack={() => setCurrentPage('home')} />,
    services: <Services onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />,
    privacy: <PrivacyPolicy onBack={() => setCurrentPage('home')} />,
    terms: <TermsOfService onBack={() => setCurrentPage('home')} />,
    cookies: <CookiePolicy onBack={() => setCurrentPage('home')} />
  };

  if (currentPage !== 'home') return pages[currentPage];

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
              {['buy', 'sell', 'rent', 'landlord', 'services', 'about'].map(page => (
                <button key={page} onClick={() => setCurrentPage(page as any)}
                  className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm sm:text-base font-medium min-w-[60px] text-center">
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              ))}
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
              Discover exceptional properties across Leicestershire with MyEstateAgent. From charming cottages to luxury estates, 
              we help you find the home of your dreams with expert guidance every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('buy')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
              >
                Browse Properties
              </button>
              <button 
                onClick={openPopup}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium text-lg"
              >
                Book Free Valuation
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: TrendingUp, color: 'green', label: 'Properties Sold', value: '2,500+' },
              { icon: Users, color: 'blue', label: 'Happy Clients', value: '5,000+' },
              { icon: Heart, color: 'purple', label: 'Years Experience', value: '15+' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-xl max-w-sm mx-auto">
                <div className="flex items-center justify-center space-x-3">
                  <div className={`bg-${stat.color}-100 p-2 rounded-lg`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
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
            {[
              { icon: Search, color: 'blue', title: 'Buying', desc: 'Find your dream home with our extensive property database and expert guidance throughout the buying process.', items: ['Property search assistance', 'Mortgage advice', 'Legal support coordination'] },
              { icon: TrendingUp, color: 'green', title: 'Selling', desc: 'Get the best price for your property with our comprehensive marketing strategy and expert valuation services.', items: ['Free property valuations', 'Professional photography', 'Multi-platform marketing'] },
              { icon: Key, color: 'purple', title: 'Renting', desc: "Whether you're a tenant or landlord, we provide complete letting services with full property management options.", items: ['Tenant matching', 'Property management', 'Legal compliance'] }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                <div className={`bg-${service.color}-100 p-3 rounded-lg w-fit mb-6 mx-auto`}>
                  <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center space-x-2 justify-center">
                      <div className={`w-1.5 h-1.5 bg-${service.color}-600 rounded-full`}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
              {[
                { icon: Users, color: 'blue', title: 'Local Expertise', desc: 'Deep knowledge of UK property markets with local insights that matter.' },
                { icon: Heart, color: 'green', title: 'Personal Service', desc: 'Dedicated support throughout your property journey with a personal touch.' },
                { icon: TrendingUp, color: 'purple', title: 'Proven Results', desc: 'Track record of successful transactions and satisfied clients across the UK.' }
              ].map((item, i) => (
                <div key={i} className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className={`bg-${item.color}-100 p-2 rounded-lg flex-shrink-0 mx-auto`}>
                      <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
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
            {[
              { icon: Phone, color: 'blue', title: 'Call Us', value: '01234 567890' },
              { icon: Mail, color: 'green', title: 'Email Us', value: 'hello@myestateagent.co.uk' },
              { icon: MapPin, color: 'purple', title: 'Visit Us', value: 'High Street, Leicestershire' }
            ].map((contact, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`bg-${contact.color}-100 p-3 rounded-lg mb-4`}>
                  <contact.icon className={`h-6 w-6 text-${contact.color}-600`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-600">{contact.value}</p>
              </div>
            ))}
          </div>
          
          <button 
            onClick={openConsultation}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
          >
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
              {[['privacy', 'Privacy Policy'], ['terms', 'Terms of Service'], ['cookies', 'Cookie Policy']].map(([page, label]) => (
                <button key={page} onClick={() => setCurrentPage(page as any)} className="hover:text-blue-600 transition-colors">
                  {label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-100 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2025 MyEstateAgent. All rights reserved. Regulated by RICS.</p>
          </div>
        </div>
      </footer>

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

export default App;