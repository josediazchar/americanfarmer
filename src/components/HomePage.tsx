import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Navbar from './Navbar';
import Hero from './Hero';
import HomeSections from './HomeSections';
import Footer from './Footer';
import PageTransition from './PageTransition';

const HomePage: React.FC = () => {
  return (
    <LanguageProvider>
      <PageTransition>
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <Hero />
          
          {/* Home Sections with translations */}
          <HomeSections />
        </main>
        
        <Footer />
      </PageTransition>
    </LanguageProvider>
  );
};

export default HomePage; 