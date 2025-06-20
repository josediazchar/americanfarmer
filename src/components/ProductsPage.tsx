import React from 'react';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductCard from './ProductCard';
import AnimatedSection from './AnimatedSection';
import CounterAnimation from './CounterAnimation';
import PageTransition from './PageTransition';
import StatsCounter from './StatsCounter';

const ProductsPageContent: React.FC = () => {
  const { language, t } = useLanguage();

  const products = [
    {
      name: t('products.banana.name'),
      description: t('products.banana.description'),
      image: "/banano_2.png",
      characteristics: t('products.banana.characteristics').split(','),
      scientificName: "Musa Acuminata",
      origin: "Colombia"
    },
    {
      name: t('products.plantain.name'),
      description: t('products.plantain.description'),
      image: "/platano_caja.png",
      characteristics: t('products.plantain.characteristics').split(','),
      scientificName: "Musa Paradisiaca",
      origin: "Colombia"
    },
    {
      name: t('products.pineapple.name'),
      description: t('products.pineapple.description'),
      image: "/pina_2.jpg",
      characteristics: t('products.pineapple.characteristics').split(','),
      scientificName: "Ananas Comosus",
      origin: "Colombia"
    },
    {
      name: t('products.lime.name'),
      description: t('products.lime.description'),
      image: "https://img.lalr.co/cms/2024/11/15131405/11-770x510-1.jpg?w=728",
      characteristics: t('products.lime.characteristics').split(','),
      scientificName: "Citrus Latifolia",
      origin: "Colombia"
    },
    {
      name: t('products.fruitpulp.name'),
      description: t('products.fruitpulp.description'),
      image: "/pulpas.png",
      characteristics: t('products.fruitpulp.characteristics').split(','),
      scientificName: "Pulpa Natural",
      origin: "Colombia"
    }
  ];

  return (
    <>
      <Navbar />
      
      <main>
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-yellow-500 to-red-600 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{backgroundImage: "url('https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"}}></div>
          
          <AnimatedSection className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('products.title')}
            </h1>
            <p className="text-xl sm:text-2xl text-yellow-100 max-w-3xl mx-auto mb-8">
              {t('products.subtitle')}
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-yellow-100">{t('products.stats.varieties')}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-yellow-100">{t('products.stats.colombian')}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-yellow-100">{t('products.stats.support')}</div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {t('products.qualityTitle')}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {t('products.qualityDescription')}
              </p>
            </div>
            
            {/* Quality Badges */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('products.badges.certification.title')}</h3>
                <p className="text-sm text-gray-600">{t('products.badges.certification.description')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('products.badges.traceability.title')}</h3>
                <p className="text-sm text-gray-600">{t('products.badges.traceability.description')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 7C14.2 7 16 8.8 16 11V16C16 17.1 15.1 18 14 18H10C8.9 18 8 17.1 8 16V11C8 8.8 9.8 7 12 7ZM6 8C7.1 8 8 8.9 8 10S7.1 12 6 12S4 11.1 4 10S4.9 8 6 8Z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('products.badges.freshness.title')}</h3>
                <p className="text-sm text-gray-600">{t('products.badges.freshness.description')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('products.badges.fairTrade.title')}</h3>
                <p className="text-sm text-gray-600">{t('products.badges.fairTrade.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {t('products.portfolioTitle')}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t('products.portfolioDescription')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  description={product.description}
                  image={product.image}
                  characteristics={product.characteristics}
                  scientificName={product.scientificName}
                  origin={product.origin}
                />
              ))}
            </div>

          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {t('products.processTitle')}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t('products.processDescription')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="absolute top-10 -right-8 hidden md:block">
                    <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('products.process.step1.title')}</h3>
                <p className="text-gray-600">{t('products.process.step1.description')}</p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="absolute top-10 -right-8 hidden md:block">
                    <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('products.process.step2.title')}</h3>
                <p className="text-gray-600">{t('products.process.step2.description')}</p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <div className="absolute top-10 -right-8 hidden md:block">
                    <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('products.process.step3.title')}</h3>
                <p className="text-gray-600">{t('products.process.step3.description')}</p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('products.process.step4.title')}</h3>
                <p className="text-gray-600">{t('products.process.step4.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {t('products.ctaTitle')}
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              {t('products.ctaDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={`https://wa.me/573226256101?text=${encodeURIComponent(t('products.whatsappMessage'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-lg px-8 py-4"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                </svg>
                {t('products.ctaButton')}
              </a>
              
              <div className="flex items-center text-white/90 text-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                {t('products.guarantee')}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

const ProductsPage: React.FC = () => {
  return (
    <LanguageProvider>
      <PageTransition>
        <ProductsPageContent />
      </PageTransition>
    </LanguageProvider>
  );
};

export default ProductsPage; 