import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Navbar from './Navbar';
import Hero from './Hero';
import HomeSections from './HomeSections';
import Footer from './Footer';

const HomePage: React.FC = () => {
  return (
    <LanguageProvider>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Home Sections with translations */}
        <HomeSections />
      </main>
      
      <Footer />
    </LanguageProvider>
  );
};

export default HomePage; 