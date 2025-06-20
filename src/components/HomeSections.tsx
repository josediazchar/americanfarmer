import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ProductCard from './ProductCard';
import AnimatedSection from './AnimatedSection';
import CounterAnimation from './CounterAnimation';

const HomeSections: React.FC = () => {
  const { t, language } = useLanguage();

  const featuredProducts = [
    {
      id: 'banana',
      image: "/banano.png",
      scientificName: "Musa Acuminata",
      origin: "Colombia"
    },
    {
      id: 'pineapple',
      image: "/pina.png",
      scientificName: "Ananas Comosus",
      origin: "Colombia"
    },
    {
      id: 'plantain',
      image: "/platano2.jpeg",
      scientificName: "Musa Paradisiaca",
      origin: "Colombia"
    },
    {
      id: 'lime',
      image: "/limon.png",
      scientificName: "Citrus Latifolia",
      origin: "Colombia"
    },
    {
      id: 'fruitpulp',
      image: "/pulpas.png",
      scientificName: "Pulpa Natural",
      origin: "Colombia"
    }
  ];

  return (
    <>
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t('home.intro.title')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('home.intro.description')}
            </p>
          </AnimatedSection>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection animation="scaleIn" delay={0.2} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('home.stats.quality.title')}</h3>
              <p className="text-gray-600">{t('home.stats.quality.description')}</p>
            </AnimatedSection>
            
            <AnimatedSection animation="scaleIn" delay={0.4} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('home.stats.export.title')}</h3>
              <p className="text-gray-600">{t('home.stats.export.description')}</p>
            </AnimatedSection>
            
            <AnimatedSection animation="scaleIn" delay={0.6} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('home.stats.commitment.title')}</h3>
              <p className="text-gray-600">{t('home.stats.commitment.description')}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t('home.products.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('home.products.description')}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <AnimatedSection
                key={product.id}
                animation={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
                delay={0.2 + index * 0.1}
              >
                <ProductCard
                  name={t(`products.${product.id}.name`)}
                  description={t(`products.${product.id}.description`)}
                  image={product.image}
                  characteristics={t(`products.${product.id}.characteristics`).split(',')}
                  scientificName={product.scientificName}
                  origin={product.origin}
                />
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animation="fadeInUp" delay={0.8} className="text-center">
            <a href="/products" className="btn-primary btn-enhanced text-lg px-8 py-4 hover-lift">
              {t('home.products.viewAll')}
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default HomeSections; 