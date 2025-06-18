import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToast: React.FC = () => {
  const { language, showToast } = useLanguage();

  if (!showToast) return null;

  const languageNames = {
    es: 'Español',
    en: 'English'
  };

  const flags = {
    es: '🇪🇸',
    en: '🇺🇸'
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-3 flex items-center gap-3">
        <span className="text-lg">{flags[language]}</span>
        <span className="text-sm font-medium text-gray-700">
          {language === 'es' ? 'Idioma cambiado a' : 'Language changed to'} {languageNames[language]}
        </span>
        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageToast; 