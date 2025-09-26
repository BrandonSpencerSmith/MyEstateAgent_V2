import React, { useState } from 'react';
import { X, Calendar, User, Mail, Phone, MessageCircle, CheckCircle, Clock } from 'lucide-react';

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

function ConsultationPopup({ isOpen, onClose }: ConsultationPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Consultation form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds and close popup
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredTime: ''
      });
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 relative animate-in fade-in duration-200 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>

        {!isSubmitted ? (
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

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 pb-6">
              <div className="space-y-4">
                {/* Name */}
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

                {/* Email */}
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

                {/* Phone */}
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

                {/* Service Interest */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="buying">Property Buying</option>
                    <option value="selling">Property Selling</option>
                    <option value="renting">Property Renting</option>
                    <option value="landlord">Landlord Services</option>
                    <option value="valuation">Property Valuation</option>
                    <option value="investment">Investment Advice</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Preferred Time */}
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Contact Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Any time</option>
                      <option value="morning">Morning (9am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 5pm)</option>
                      <option value="evening">Evening (5pm - 7pm)</option>
                      <option value="weekend">Weekend</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your property requirements or any specific questions..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-6 w-6" />
                  <span>Book Free Consultation</span>
                </button>
              </div>

              {/* Disclaimer */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  By submitting this form, you agree to be contacted by MyEstateAgent regarding your property needs. 
                  We respect your privacy and will never share your information with third parties.
                </p>
              </div>
            </form>
          </>
        ) : (
          /* Success Message */
          <div className="p-8 text-center">
            <div className="bg-green-100 p-4 rounded-lg w-fit mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Consultation Booked Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest! Our expert team will contact you within 24 hours to schedule your free consultation.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800 font-medium">
                What happens next?
              </p>
              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                <li>• We'll call you within 24 hours</li>
                <li>• Schedule a convenient consultation time</li>
                <li>• Provide expert property advice</li>
                <li>• No obligation or pressure</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConsultationPopup;