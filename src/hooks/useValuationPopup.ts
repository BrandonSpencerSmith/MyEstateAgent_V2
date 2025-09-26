import { useState } from 'react';

export function useValuationPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'valuation_popup_opened', {
        event_category: 'engagement',
        event_label: 'virtual_assistant_promotion'
      });
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleUseVirtualAssistant = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'virtual_assistant_selected', {
        event_category: 'conversion',
        event_label: 'ai_valuation_started'
      });
    }
    
    // Here you would integrate with your virtual assistant/chatbot
    console.log('Starting virtual assistant valuation...');
    alert('🤖 Virtual Assistant Starting!\n\nOur AI-powered valuation assistant will now help you get an instant property valuation. You\'ll be able to ask questions and get detailed market insights in real-time!');
    closePopup();
  };

  return {
    isPopupOpen,
    openPopup,
    closePopup,
    handleUseVirtualAssistant
  };
}