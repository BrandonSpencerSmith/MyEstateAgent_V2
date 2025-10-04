import React from 'react';
import ValuationPopup from './ValuationPopup';
import { useValuationPopup } from '../hooks/useValuationPopup';
import ConsultationPopup from './ConsultationPopup';
import { useConsultationPopup } from '../hooks/useConsultationPopup';
import PageHeader from './shared/PageHeader';
import PropertyCard from './shared/PropertyCard';
import { rentProperties } from '../data/properties';
import { Key, Shield, Users, CheckCircle } from 'lucide-react';

interface RentProps {
  onBack: () => void;
}

export default function Rent({ onBack }: RentProps) {
  const { isPopupOpen, openPopup, closePopup, handleUseVirtualAssistant } = useValuationPopup();
  const { isPopupOpen: isConsultationOpen, openPopup: openConsultation, closePopup: closeConsultation } = useConsultationPopup();

  return (
    <div className="min-h-screen bg-white">
      <PageHeader onBack={onBack} />

      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 mx-auto max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Find Your Perfect <span className="text-blue-600">Rental</span>
            </h1>
            <p className="text-xl text-gray-600">
              Discover exceptional rental properties across Leicestershire with MyEstateAgent. From modern apartments
              to family homes, we help you find the perfect rental property with expert guidance and support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Rental Properties</h2>
            <p className="text-gray-600">Discover your perfect rental home in Leicestershire</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentProperties.map((prop, i) => (
              <PropertyCard key={i} {...prop} onBook={openPopup} />
            ))}
          </div>
        </div>
      </section>

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
              <p className="text-gray-600">Access to carefully vetted rental properties that meet our high standards for quality and condition.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Process</h3>
              <p className="text-gray-600">Professional handling of deposits, contracts, and legal requirements to protect your interests.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600">Dedicated support throughout your tenancy with maintenance coordination and landlord liaison.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Rental Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive rental services for both tenants and landlords across the UK.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Tenants</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3 justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Property search and matching</span>
                </li>
                <li className="flex items-center space-x-3 justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Viewing arrangements</span>
                </li>
                <li className="flex items-center space-x-3 justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Application processing</span>
                </li>
                <li className="flex items-center space-x-3 justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Tenancy agreement support</span>
                </li>
                <li className="flex items-center space-x-3 justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Deposit protection guidance</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <Key className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Landlords</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3 justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Property marketing and advertising</span>
                </li>
                <li className="flex items-center space-x-3 justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Tenant screening and referencing</span>
                </li>
                <li className="flex items-center space-x-3 justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Rent collection and management</span>
                </li>
                <li className="flex items-center space-x-3 justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Property maintenance coordination</span>
                </li>
                <li className="flex items-center space-x-3 justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Legal compliance support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Next Rental?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get in touch with our expert team today and let us help you find the perfect rental property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openPopup} className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Register Your Interest
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
