import React from 'react';
import { X, MessageCircle, FileText, Clock, CheckCircle } from 'lucide-react';

interface ValuationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onUseVirtualAssistant: () => void;
  onContinueToForm: () => void;
}

function ValuationPopup({ isOpen, onClose, onUseVirtualAssistant, onContinueToForm }: ValuationPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 relative animate-in fade-in duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4">
          <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
            <MessageCircle className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Get Your Valuation Instantly!
          </h2>
          <p className="text-gray-600 text-center">
            Try our AI-powered virtual assistant for immediate property valuation estimates
          </p>
        </div>

        {/* Benefits */}
        <div className="px-6 pb-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-1 rounded-full">
                <Clock className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-sm text-gray-700">Get instant responses 24/7</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-1 rounded-full">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-sm text-gray-700">No waiting for callbacks or appointments</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-1 rounded-full">
                <MessageCircle className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-sm text-gray-700">Interactive chat-based experience</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 pt-2 space-y-3">
          <button
            onClick={onUseVirtualAssistant}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Use Virtual Assistant</span>
          </button>
          
          <button
            onClick={onContinueToForm}
            className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium flex items-center justify-center space-x-2"
          >
            <FileText className="h-5 w-5" />
            <span>Continue to Standard Form</span>
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <p className="text-xs text-gray-500 text-center">
            Both options provide professional property valuations from our expert team
          </p>
        </div>
      </div>
    </div>
  );
}

export default ValuationPopup;