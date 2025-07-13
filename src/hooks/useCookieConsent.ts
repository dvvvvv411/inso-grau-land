import { useState, useEffect, useCallback } from 'react';

export interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytical: boolean;
  marketing: boolean;
}

export interface CookieConsentState {
  hasConsented: boolean;
  preferences: CookiePreferences;
  consentDate: string | null;
}

const STORAGE_KEY = 'cookie-consent';

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true, can't be disabled
  functional: false,
  analytical: false,
  marketing: false,
};

export const useCookieConsent = () => {
  const [consentState, setConsentState] = useState<CookieConsentState>({
    hasConsented: false,
    preferences: defaultPreferences,
    consentDate: null,
  });

  const [showBanner, setShowBanner] = useState(false);

  // Load consent state from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsedState = JSON.parse(stored);
        setConsentState(parsedState);
        setShowBanner(false);
      } catch (error) {
        console.error('Error parsing stored consent:', error);
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  // Save consent state to localStorage
  const saveConsent = useCallback((preferences: CookiePreferences) => {
    const newState: CookieConsentState = {
      hasConsented: true,
      preferences: { ...preferences, necessary: true }, // Ensure necessary is always true
      consentDate: new Date().toISOString(),
    };

    setConsentState(newState);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    setShowBanner(false);

    // Dispatch custom event for other parts of the app
    window.dispatchEvent(new CustomEvent('cookieConsentUpdate', { 
      detail: newState 
    }));
  }, []);

  // Accept all cookies
  const acceptAll = useCallback(() => {
    saveConsent({
      necessary: true,
      functional: true,
      analytical: true,
      marketing: true,
    });
  }, [saveConsent]);

  // Accept only necessary cookies
  const acceptNecessary = useCallback(() => {
    saveConsent(defaultPreferences);
  }, [saveConsent]);

  // Accept custom preferences
  const acceptCustom = useCallback((preferences: CookiePreferences) => {
    saveConsent(preferences);
  }, [saveConsent]);

  // Reset consent (for testing or user request)
  const resetConsent = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setConsentState({
      hasConsented: false,
      preferences: defaultPreferences,
      consentDate: null,
    });
    setShowBanner(true);
  }, []);

  // Update preferences (for settings page)
  const updatePreferences = useCallback((newPreferences: CookiePreferences) => {
    saveConsent(newPreferences);
  }, [saveConsent]);

  return {
    showBanner,
    consentState,
    acceptAll,
    acceptNecessary,
    acceptCustom,
    resetConsent,
    updatePreferences,
    setShowBanner,
  };
};