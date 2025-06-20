import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    {
      code: 'es' as Language,
      name: 'Español',
      flag: '🇪🇸'
    },
    {
      code: 'en' as Language,
      name: 'English',
      flag: '🇺🇸'
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);
  const otherLanguage = languages.find(lang => lang.code !== language);

  const handleLanguageToggle = () => {
    if (otherLanguage) {
      setLanguage(otherLanguage.code);
    }
  };

  return (
    <button
      onClick={handleLanguageToggle}
      className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-gray-700 border border-gray-300"
      aria-label={`Cambiar idioma a ${otherLanguage?.name}`}
      title={`Cambiar a ${otherLanguage?.name}`}
    >
      <span className="text-xl">{currentLanguage?.flag}</span>
    </button>
  );
};

export default LanguageSelector; 