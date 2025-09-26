import React from 'react';
import { X, Phone, Calendar, Users, Award, Clock, CheckCircle } from 'lucide-react';

interface ValuationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
  onCallNow: () => void;
}

function ValuationPopup({ isOpen, onClose, onBookConsultation, onCallNow }: ValuationPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 relative animate-in fade-in duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4 text-center">
          <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
            <Users className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Get Your Expert Property Valuation
          </h2>
          <p className="text-gray-600">
            Speak directly with our RICS-qualified valuers for a comprehensive property assessment tailored to your specific needs
          </p>
        </div>

        {/* Expert Benefits */}
        <div className="px-6 pb-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-1 rounded-full">
                <Award className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-sm text-gray-700">RICS-qualified property experts</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-1 rounded-full">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-sm text-gray-700">Comprehensive market analysis included</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-1 rounded-full">
                <Clock className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-sm text-gray-700">Personalized consultation at your convenience</span>
            </div>
          </div>
        </div>

        {/* Consultation Options */}
        <div className="px-6 pb-4">
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-gray-900 mb-2 text-center">Choose Your Preferred Consultation Method:</h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="text-center">
                <Phone className="h-5 w-5 mx-auto mb-1 text-blue-600" />
                <span>Phone Consultation</span>
              </div>
              <div className="text-center">
                <Users className="h-5 w-5 mx-auto mb-1 text-blue-600" />
                <span>In-Person Visit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 pt-2 space-y-3">
          <button
            onClick={onCallNow}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now - Speak to an Expert</span>
          </button>
          
          <button
            onClick={onBookConsultation}
            className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium flex items-center justify-center space-x-2"
          >
            <Calendar className="h-5 w-5" />
            <span>Schedule a Consultation</span>
          </button>
        </div>

        {/* Contact Information */}
        <div className="px-6 pb-6">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Direct Line:</strong> 01234 567890
            </p>
            <p className="text-xs text-gray-500">
              Available Monday-Friday 9AM-6PM, Saturday 9AM-4PM
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <p className="text-xs text-gray-500 text-center">
            All valuations conducted by qualified professionals with comprehensive market knowledge
          </p>
        </div>
      </div>
    </div>
  );
}

export default ValuationPopup;