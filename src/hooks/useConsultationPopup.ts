import { useState } from 'react';

export function useConsultationPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'consultation_popup_opened', {
        event_category: 'engagement',
        event_label: 'consultation_booking'
      });
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return {
    isPopupOpen,
    openPopup,
    closePopup
  };
}