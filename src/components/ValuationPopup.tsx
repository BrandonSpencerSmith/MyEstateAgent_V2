import React from 'react';
import { X, Bot, Zap, Clock, MessageCircle, Star, CheckCircle } from 'lucide-react';

interface ValuationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onUseVirtualAssistant: () => void;
}

function ValuationPopup({ isOpen, onClose, onUseVirtualAssistant }: ValuationPopupProps) {
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
            <Bot className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Get Your Property Valuation
          </h2>
          <p className="text-gray-600">
            Our AI-powered virtual assistant provides property valuations with expert-level accuracy, available 24/7
          </p>
        </div>

        {/* Virtual Assistant Benefits */}
        <div className="px-6 pb-4">
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-gray-900 mb-3 text-center flex items-center justify-center space-x-2">
              <Star className="h-5 w-5 text-blue-600" />
              <span>Why Choose Our Virtual Assistant?</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-1 rounded-full">
                  <Zap className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm text-gray-700">Quick results - Get your valuation in under 2 minutes</span>
              <span className="text-sm text-gray-700">Quick setup - Provide your details in under 2 minutes</span>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-1 rounded-full">
                  <Clock className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm text-gray-700">Available 24/7 - No waiting for office hours</span>
              <span className="text-sm text-gray-700">Available 24/7 - Book your valuation anytime</span>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-1 rounded-full">
                  <MessageCircle className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm text-gray-700">Interactive chat - Ask questions and get detailed explanations</span>
              <span className="text-sm text-gray-700">Smart questions - Our AI asks the right questions to help our valuers</span>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-1 rounded-full">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm text-gray-700">Comprehensive analysis - Market trends, comparable sales, and more</span>
              <span className="text-sm text-gray-700">Expert follow-up - Connected directly to our qualified RICS valuers</span>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="px-6 pb-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3 text-center">How It Works:</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">1</div>
                <span>Tell our AI assistant about your property</span>
              <span>Our AI assistant gathers your property information</span>
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">2</div>
                <span>Get comprehensive market analysis and valuation</span>
              <span>Your details are passed to our qualified valuers</span>
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">3</div>
                <span>Ask follow-up questions and get expert insights</span>
              <span>Receive your professional valuation from our experts</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-6 pt-2">
          <button
            onClick={onUseVirtualAssistant}
            className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg flex items-center justify-center space-x-2"
          >
            <Bot className="h-6 w-6" />
            <span>Start Virtual Assistant Valuation</span>
          <span>Start Virtual Assistant Booking</span>
        </div>

        {/* Trust Indicators */}
        <div className="px-6 pb-6">
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <p className="text-sm text-green-800 font-medium mb-2">
              ✨ Trusted by 10,000+ Property Owners
            ✨ Trusted by 10,000+ Property Owners for Professional Valuations
            <p className="text-xs text-green-700">
          Book Your Property Valuation
            Our virtual assistant streamlines the booking process while ensuring you receive 
            a comprehensive valuation from our RICS-qualified professionals
          Our AI assistant will gather your property details and connect you with our qualified valuers for a professional assessment
        </div>
      </div>
    </div>
  );
}

export default ValuationPopup;
            <span>Why Use Our Virtual Assistant?</span>