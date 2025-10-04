import React, { useEffect } from 'react';
import ValuationPopup from './ValuationPopup';
import { useValuationPopup } from '../hooks/useValuationPopup';
import ConsultationPopup from './ConsultationPopup';
import { useConsultationPopup } from '../hooks/useConsultationPopup';
import PageHeader from './shared/PageHeader';
import PropertyCard from './shared/PropertyCard';
import { buyProperties } from '../data/properties';
import { Search, Heart, Calendar } from 'lucide-react';
import { verifyDataLoaded, verifyComponentMount, verifyImports } from '../utils/devDiagnostics';

interface BuyProps {
  onBack: () => void;
}

export default function Buy({ onBack }: BuyProps) {
  const { isPopupOpen, openPopup, closePopup, handleUseVirtualAssistant } = useValuationPopup();
  const { isPopupOpen: isConsultationOpen, openPopup: openConsultation, closePopup: closeConsultation } = useConsultationPopup();

  useEffect(() => {
    verifyComponentMount('Buy');
    verifyImports('Buy', { PageHeader, PropertyCard, buyProperties });
    verifyDataLoaded('Buy Properties', buyProperties);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader onBack={onBack} />

      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 mx-auto max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Find Your Perfect <span className="text-blue-600">Home</span>
            </h1>
            <p className="text-xl text-gray-600">
              Discover your dream property from our extensive collection of homes across Leicestershire.
              From cozy apartments to luxury estates, we have something for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Properties</h2>
            <p className="text-gray-600">Discover your perfect home in Leicestershire</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buyProperties.map((prop, i) => (
              <PropertyCard key={i} {...prop} onBook={openPopup} />
            ))}
          </div>
        </div>
      </section>

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
              <p className="text-gray-600">Access to exclusive properties and expert market knowledge to find your perfect home.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Service</h3>
              <p className="text-gray-600">Dedicated property consultant to understand your needs and guide you through the entire process.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-6">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Full Support</h3>
              <p className="text-gray-600">From viewings to completion, we coordinate with solicitors, surveyors, and mortgage advisors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Property Search?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get in touch with our expert team today and let us help you find your dream home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openConsultation} className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Book Free Consultation
            </button>
            <button onClick={onBack} className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium">
              Back to Home
            </button>
          </div>
        </div>
      </section>

      <ValuationPopup isOpen={isPopupOpen} onClose={closePopup} onUseVirtualAssistant={handleUseVirtualAssistant} />
      <ConsultationPopup isOpen={isConsultationOpen} onClose={closeConsultation} />
    </div>
  );
}
