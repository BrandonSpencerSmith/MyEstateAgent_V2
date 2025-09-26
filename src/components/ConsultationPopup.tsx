import React, { useState } from 'react';
import { X, Calendar, User, Mail, Phone, MessageCircle, CheckCircle, Clock, Award } from 'lucide-react';

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

function ConsultationPopup({ isOpen, onClose }: ConsultationPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Consultation request:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds and close popup
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      onClose();
    }, 3000);
  };

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

        {isSubmitted ? (
          // Success State
          <div className="p-8 text-center">
            <div className="bg-green-100 p-4 rounded-lg w-fit mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-600 mb-4">
              Your consultation request has been received. We'll contact you within 24 hours to schedule your free consultation.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800 font-medium">
                📞 Expect a call from our expert team soon!
              </p>
            </div>
          </div>
        ) : (
          // Form State
          <>
            {/* Header */}
            <div className="p-6 pb-4 text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Book Your Free Consultation
              </h2>
              <p className="text-gray-600">
                Get expert property advice tailored to your needs. Our consultation is completely free with no obligation.
              </p>
            </div>

            {/* Benefits */}
            <div className="px-6 pb-4">
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-gray-900 mb-3 text-center">What You'll Get:</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-1 rounded-full">
                      <Award className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-700">Expert property market analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-1 rounded-full">
                      <MessageCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-700">Personalized advice for your situation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-1 rounded-full">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-700">30-minute consultation at your convenience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 pb-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    How can we help? (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your property needs..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg mt-6 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Free Consultation</span>
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                By submitting this form, you agree to be contacted by our team. No spam, we promise!
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ConsultationPopup;