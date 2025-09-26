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
    
    // Launch Voiceflow chat
    if (typeof window !== 'undefined' && (window as any).voiceflow?.chat?.open) {
      (window as any).voiceflow.chat.open();
    }
    
    // Close the popup
    closePopup();
  };

  return {
    isPopupOpen,
    openPopup,
    closePopup,
    handleUseVirtualAssistant
  };
}