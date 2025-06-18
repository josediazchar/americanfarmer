import React, { type ReactNode } from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import LanguageToast from './LanguageToast';

interface LanguageWrapperProps {
  children: ReactNode;
}

const LanguageWrapper: React.FC<LanguageWrapperProps> = ({ children }) => {
  return (
    <LanguageProvider>
      {children}
      <LanguageToast />
    </LanguageProvider>
  );
};

export default LanguageWrapper; 