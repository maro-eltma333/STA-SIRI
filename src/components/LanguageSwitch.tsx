import { useLanguageStore } from '@/utils/i18n';
import { getTranslation } from '@/utils/translations';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguageStore();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-base font-bold text-white hover:text-white/90 transition-colors duration-200"
    >
      {getTranslation(language, 'languageSwitch')}
    </button>
  );
};

export default LanguageSwitch;
