import React from 'react';
import ValuationPopup from './ValuationPopup';
import { useValuationPopup } from '../hooks/useValuationPopup';
import ConsultationPopup from './ConsultationPopup';
import { useConsultationPopup } from '../hooks/useConsultationPopup';
import PageHeader from './shared/PageHeader';
import { sellStats, sellServices, sellingProcess, testimonials, guarantees } from '../data/sellPageData';
import { CheckCircle, Star, Phone, Mail, MapPin, Clock, TrendingUp, Users } from 'lucide-react';

interface SellProps {
  onBack: () => void;
}

export default function Sell({ onBack }: SellProps) {
  const { isPopupOpen, openPopup, closePopup, handleUseVirtualAssistant } = useValuationPopup();
  const { isPopupOpen: isConsultationOpen, openPopup: openConsultation, closePopup: closeConsultation } = useConsultationPopup();

  return (
    <div className="min-h-screen bg-white">
      <PageHeader onBack={onBack} />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 mx-auto max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sell Your Property with <span className="text-blue-600">Confidence</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Get the best price for your property with our expert marketing, professional photography, and proven sales strategy.
              Our experienced team will guide you through every step of the selling process in Leicestershire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openPopup} className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
                Get Free Property Valuation
              </button>
              <button onClick={openConsultation} className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium text-lg">
                Book Consultation
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {sellStats.map((stat, i) => (
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MyEstateAgent</h2>
            <p className="text-lg text-gray-600">
              Our proven expertise and comprehensive approach ensure you get the best possible outcome when selling your property.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Extensive Buyer Network</h3>
                <p className="text-gray-600 mb-4">
                  Our extensive database of pre-qualified buyers and strategic partnerships with mortgage brokers
                  means we can quickly match your property with serious, ready-to-move buyers.
                </p>
                <div className="flex items-center space-x-2 text-green-600">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-medium">Over 5,000 active buyers in our database</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Marketing Excellence</h3>
                <p className="text-gray-600 mb-4">
                  Our award-winning marketing strategy combines professional photography, premium portal placement,
                  and targeted social media campaigns to ensure maximum exposure for your property.
                </p>
                <div className="flex items-center space-x-2 text-blue-600">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">Featured on 15+ property portals and platforms</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Service Guarantee</h3>
              <ul className="space-y-4">
                {guarantees.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Selling Process</h2>
            <p className="text-lg text-gray-600">
              From initial valuation to completion, we guide you through every step with transparency and expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {sellingProcess.map((step, i) => (
              <div key={i} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.desc}</p>
                  <div className="flex items-center space-x-2 text-sm text-blue-600">
                    <Clock className="h-4 w-4" />
                    <span>Timeframe: {step.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-gray-600">
              Our comprehensive approach and attention to detail ensure your property stands out in the market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellServices.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                <div className={`bg-${service.color}-100 p-3 rounded-lg w-fit mb-6 mx-auto`}>
                  <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <div className={`bg-${service.color}-50 p-4 rounded-lg`}>
                  <p className={`text-sm text-${service.color}-800 font-medium`}>{service.stat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from satisfied sellers who achieved their property goals with us.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((test, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(test.rating)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">{test.text}</p>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-${test.color}-100 rounded-full flex items-center justify-center`}>
                    <span className={`text-${test.color}-600 font-semibold`}>{test.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{test.name}</p>
                    <p className="text-sm text-gray-500">{test.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: '15+', label: 'Years Experience', color: 'blue' },
                { value: '2,500+', label: 'Properties Sold', color: 'green' },
                { value: '98%', label: 'Client Satisfaction', color: 'purple' },
                { value: 'RICS', label: 'Regulated', color: 'orange' }
              ].map((cred, i) => (
                <div key={i} className="text-center">
                  <div className={`text-3xl font-bold text-${cred.color}-600 mb-2`}>{cred.value}</div>
                  <div className="text-gray-600">{cred.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Sell Your Property?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get started today with a free, no-obligation property valuation and discover what your home is worth.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              { icon: Phone, color: 'blue', title: 'Call Us', subtitle: 'Speak to an expert today', value: '01234 567890' },
              { icon: Mail, color: 'green', title: 'Email Us', subtitle: 'Get a quick response', value: 'sell@myestateagent.co.uk' },
              { icon: MapPin, color: 'purple', title: 'Visit Us', subtitle: 'Pop in for a chat', value: 'High Street, Leicestershire' }
            ].map((contact, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`bg-${contact.color}-100 p-3 rounded-lg mb-4`}>
                  <contact.icon className={`h-6 w-6 text-${contact.color}-600`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{contact.subtitle}</p>
                <p className={`text-${contact.color}-600 font-medium`}>{contact.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button onClick={openPopup} className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
              Book Free Valuation
            </button>
            <button onClick={openConsultation} className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium text-lg">
              Request Market Analysis
            </button>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Property Valuation Includes:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              {['Comprehensive market analysis', 'Comparable sales data', 'Marketing strategy consultation', 'No obligation or commitment'].map((item, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ValuationPopup isOpen={isPopupOpen} onClose={closePopup} onUseVirtualAssistant={handleUseVirtualAssistant} />
      <ConsultationPopup isOpen={isConsultationOpen} onClose={closeConsultation} />
    </div>
  );
}
