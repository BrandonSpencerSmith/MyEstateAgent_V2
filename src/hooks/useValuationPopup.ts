import { useState } from 'react';

export function useValuationPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'valuation_popup_opened', {
        event_category: 'engagement',
        event_label: 'valuation_booking'
      });
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleVirtualAssistant = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'virtual_assistant_selected', {
        event_category: 'conversion',
        event_label: 'valuation_booking'
      });
    }
    
    // Here you would integrate with your virtual assistant
    console.log('Opening virtual assistant for valuation...');
    alert('Virtual Assistant feature coming soon! For now, please call us at 01234 567890.');
    closePopup();
  };

  const handleStandardForm = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'standard_form_selected', {
        event_category: 'conversion',
        event_label: 'valuation_booking'
      });
    }
    
    // Here you would navigate to the standard form
    console.log('Opening standard valuation form...');
    alert('Standard form feature coming soon! For now, please call us at 01234 567890.');
    closePopup();
  };

  return {
    isPopupOpen,
    openPopup,
    closePopup,
    handleVirtualAssistant,
    handleStandardForm
  };
}