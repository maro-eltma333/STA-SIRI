import { useLanguageStore } from '@/utils/i18n';
import { getTranslation } from '@/utils/translations';
import LanguageSwitch from './LanguageSwitch';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { language } = useLanguageStore();

  return (
    <header className="bg-sta-primary text-white py-3 sm:py-4 shadow-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-3 sm:gap-4 group transition-all duration-300 hover:opacity-90"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-sta-primary font-bold text-sm sm:text-base">STA</span>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold leading-tight group-hover:translate-x-1 transition-transform duration-300">
                {getTranslation(language, 'appTitle')}
              </h1>
              <p className="text-xs sm:text-sm text-white/80 group-hover:text-white transition-colors duration-300">
                {getTranslation(language, 'appSubtitle')}
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-3 sm:gap-6 print:hidden">
            <p className="text-xs sm:text-sm font-medium text-white/80 hidden sm:block hover:text-white transition-colors duration-300">
              {getTranslation(language, 'siriLabel')}
            </p>
            <div className="flex items-center gap-1 sm:gap-2">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white hover:scale-110 transition-transform duration-300" />
              <LanguageSwitch />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
