import { create } from 'zustand';

// Define the language type
export type Language = 'ar' | 'en';

// Define the store interface
interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
  isRTL: boolean;
}

// Create the store
export const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'en', // Default language is English
  isRTL: false, // Default direction is LTR
  setLanguage: (language: Language) => 
    set({ 
      language, 
      isRTL: language === 'ar' 
    }),
}));

// Apply direction and language to the document
export const applyLanguageToDocument = (language: Language) => {
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
};
