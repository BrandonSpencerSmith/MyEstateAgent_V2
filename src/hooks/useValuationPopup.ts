import { useState } from 'react';

export function useValuationPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'valuation_popup_opened', {
        event_category: 'engagement',
        event_label: 'expert_consultation'
      });
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleCallNow = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_now_selected', {
        event_category: 'conversion',
        event_label: 'phone_consultation'
      });
    }
    
    // Initiate phone call
    window.location.href = 'tel:+441234567890';
    closePopup();
  };

  const handleBookConsultation = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'consultation_booking_selected', {
        event_category: 'conversion',
        event_label: 'scheduled_consultation'
      });
    }
    
    // Here you would integrate with your booking system
    console.log('Opening consultation booking system...');
    alert('Thank you for your interest! Our team will contact you within 2 hours to schedule your consultation. Call us directly at 01234 567890 for immediate assistance.');
    closePopup();
  };

  return {
    isPopupOpen,
    openPopup,
    closePopup,
    handleCallNow,
    handleBookConsultation
  };
}