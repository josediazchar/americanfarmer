import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

// Tipos para las traducciones
export type Language = 'es' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  showToast: boolean;
  setShowToast: (show: boolean) => void;
}

// Traducciones
const translations = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.products': 'Productos',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.badge': 'Exportadores Certificados desde Colombia',
    'hero.title': 'Frutas Colombianas de Calidad Superior para el Mundo',
    'hero.subtitle': 'Su socio de confianza en la comercialización y exportación de frutas frescas de alta calidad',
    'hero.cta': 'Descubre Nuestros Productos',
    'hero.whatsapp': 'Solicitar Cotización',
    'hero.guarantee': 'Respuesta rápida garantizada',
    
    // Home - Introduction
    'home.intro.title': 'Calidad y Compromiso desde Colombia hacia Usted',
    'home.intro.description': 'American Farmers se dedica a llevar las mejores frutas frescas desde los campos colombianos hasta el mercado internacional. Estamos comprometidos con la excelencia, proporcionando productos de calidad superior mientras promovemos prácticas sociales y ambientales sostenibles.',
    
    // Home - Stats
    'home.stats.quality.title': 'Calidad Certificada',
    'home.stats.quality.description': 'Productos que cumplen con los más altos estándares internacionales',
    'home.stats.export.title': 'Exportación Global',
    'home.stats.export.description': 'Llevamos la frescura colombiana a mercados internacionales',
    'home.stats.commitment.title': 'Compromiso Social',
    'home.stats.commitment.description': 'Promovemos prácticas sostenibles y desarrollo social',
    
    // Home - Products
    'home.products.title': 'Nuestra Selección de Calidad Superior',
    'home.products.description': 'Descubra la calidad excepcional de nuestras frutas colombianas, cuidadosamente seleccionadas y preparadas para el mercado internacional.',
    'home.products.viewAll': 'Ver Todos los Productos',
    
    // Products
    'products.banana.name': 'Banano Cavendish',
    'products.banana.description': 'Cultivados en el clima ideal colombiano, nuestros bananos de calidad superior ofrecen un sabor únicamente dulce y suave con una textura cremosa y libre de fibras. Cosechados para una presentación fresca y firme, son un verdadero sabor de calidad.',
    'products.banana.characteristics': 'Sabor dulce y suave,Textura cremosa,Libre de fibras,Presentación fresca y firme',
    
    'products.pineapple.name': 'Piña',
    'products.pineapple.description': 'Experimente la dulzura excepcional de nuestra Piña. Esta fruta es increíblemente jugosa con una textura tierna y brillante y un aroma fresco y afrutado.',
    'products.pineapple.characteristics': 'Increíblemente jugosa,Textura tierna y brillante,Aroma fresco y afrutado',
    
    'products.plantain.name': 'Plátano Hartón',
    'products.plantain.description': 'Un alimento básico versátil, nuestros Plátanos Hartón son conocidos por su textura firme y sabor sutilmente dulce. Perfectos para una variedad de usos culinarios, se cosechan frescos y están libres de imperfecciones.',
    'products.plantain.characteristics': 'Textura firme,Sabor sutilmente dulce,Versátil para cocina,Libre de imperfecciones',
    
    'products.lime.name': 'Lima Tahití',
    'products.lime.description': 'Nuestras Limas Tahití ofrecen un sabor característico ácido y cítrico perfecto para bebidas, cocina y más. Con un color verde vibrante y forma ovalada clásica, son un referente de calidad en cítricos.',
    'products.lime.characteristics': 'Sabor ácido característico,Color verde vibrante,Forma ovalada clásica,Perfecta para bebidas y cocina',
    
    'products.fruitpulp.name': 'Pulpas de Fruta',
    'products.fruitpulp.description': 'Descubra los sabores tradicionales auténticos de nuestras pulpas de fruta natural. Procesamos cuidadosamente las frutas para separar cáscara y semillas, obteniendo la parte comestible pura que empacamos en pequeñas porciones. Con tratamiento térmico especializado que conserva todas las propiedades nutricionales sin químicos añadidos.',
    'products.fruitpulp.characteristics': 'Libre de azúcar añadida,Sin lácteos ni conservantes,Libre de colorantes artificiales,Vida útil de un año congelada',
    
    // About
    'about.title': 'Sobre Nosotros',
    'about.subtitle': 'Conectando el mundo con la riqueza de la agricultura colombiana',
    'about.history.title': 'Nuestra Historia',
    'about.mission.title': 'Nuestra Misión',
    'about.mission.text': 'Ser líder en la comercialización y exportación de frutas frescas, logrando una posición sólida en el mercado internacional mediante la provisión de productos de calidad y promoviendo buenas prácticas sociales y ambientales.',
    'about.vision.title': 'Nuestra Visión para el Futuro',
    'about.vision.text': 'Para 2028, proyectamos ser la empresa líder en el mercado exterior, definida por la excelencia, calidad y transparencia. Estamos comprometidos con nuestro propósito, generando empleo y desarrollo social para lograr reconocimiento y éxito.',
    'about.values.title': 'Nuestros Valores',
    'about.values.description': 'Los principios que guían cada decisión y acción en American Farmers',
    
    // Values
    'values.excellence.title': 'Excelencia',
    'values.excellence.description': 'Nos comprometemos con los más altos estándares de calidad en cada producto que exportamos.',
    'values.sustainability.title': 'Sostenibilidad',
    'values.sustainability.description': 'Promovemos prácticas ambientales responsables y el desarrollo sostenible de nuestras comunidades.',
    'values.innovation.title': 'Innovación',
    'values.innovation.description': 'Buscamos constantemente nuevas formas de mejorar nuestros procesos y servicios.',
    'values.trust.title': 'Confianza',
    'values.trust.description': 'Construimos relaciones duraderas basadas en la transparencia y la confiabilidad.',
    'values.responsibility.title': 'Responsabilidad Social',
    'values.responsibility.description': 'Contribuimos al desarrollo y bienestar de las comunidades donde operamos.',
    'values.collaboration.title': 'Colaboración',
    'values.collaboration.description': 'Trabajamos en equipo con productores y clientes para lograr objetivos comunes.',
    
    // Footer
    'footer.description': 'Su socio de confianza en la comercialización y exportación de frutas frescas de alta calidad desde Colombia hacia el mundo.',
    'footer.certifiedQuality': 'Calidad Certificada',
    'footer.navigation': 'Navegación',
    'footer.contact': 'Contacto',
    'footer.email': 'Email',
    'footer.whatsapp': 'WhatsApp',
    'footer.address': 'CR 107 #97-32 AP 202 PISO 2 Apartado, Colombia',
    'footer.links': 'Enlaces',
    'footer.social': 'Síguenos',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.madeInColombia': 'Hecho en Colombia',
    'footer.developed': 'Desarrollado con ❤️ para American Farmers',
    
    // Common
    'common.origin': 'Origen: Colombia',
    'common.whatsapp.cta': 'Cotizar por WhatsApp',
    'common.whatsapp.message': 'Estoy interesado en frutas colombianas.',
    'common.contact.cta': 'Contáctanos Ahora',
    'common.readyToWork': '¿Listo para trabajar con nosotros?',
    'common.discoverPartner': 'Descubra cómo American Farmers puede ser su socio ideal en la importación de frutas colombianas de calidad superior.',
    
    // Products Page
    'products.title': 'Nuestros Productos',
    'products.subtitle': 'Frutas colombianas de calidad superior seleccionadas cuidadosamente para mercados internacionales',
    'products.stats.varieties': 'Variedades de Calidad',
    'products.stats.colombian': 'Origen Colombiano',
    'products.stats.support': 'Atención al Cliente',
    'products.qualityTitle': 'Calidad que Habla por Sí Sola',
    'products.qualityDescription': 'Cada fruta en nuestro portafolio representa la excelencia de la agricultura colombiana. Trabajamos con los mejores productores del país para garantizar productos que cumplen con los más altos estándares internacionales de calidad, frescura y sabor.',
    'products.badges.certification.title': 'Certificación Internacional',
    'products.badges.certification.description': 'Cumplimos con estándares globales de calidad',
    'products.badges.traceability.title': 'Trazabilidad Completa',
    'products.badges.traceability.description': 'Seguimiento desde el campo hasta destino',
    'products.badges.freshness.title': 'Frescura Garantizada',
    'products.badges.freshness.description': 'Cadena de frío optimizada para máxima calidad',
    'products.badges.fairTrade.title': 'Comercio Justo',
    'products.badges.fairTrade.description': 'Apoyamos a productores locales responsablemente',
    'products.portfolioTitle': 'Portafolio Completo',
    'products.portfolioDescription': 'Explore nuestra selección completa de frutas colombianas de calidad superior, cada una cuidadosamente cultivada y preparada para mercados internacionales.',
    'products.processTitle': 'Nuestro Proceso de Calidad',
    'products.processDescription': 'Desde la selección en campo hasta la entrega en destino, cada paso está diseñado para garantizar la máxima calidad.',
    'products.process.step1.title': '1. Selección en Campo',
    'products.process.step1.description': 'Trabajamos directamente con productores certificados para seleccionar las mejores frutas.',
    'products.process.step2.title': '2. Control de Calidad',
    'products.process.step2.description': 'Rigurosa inspección y clasificación según estándares internacionales de exportación.',
    'products.process.step3.title': '3. Empaque y Almacenamiento',
    'products.process.step3.description': 'Empaque especializado y almacenamiento en condiciones óptimas de temperatura y humedad.',
    'products.process.step4.title': '4. Logística Internacional',
    'products.process.step4.description': 'Gestión completa de la cadena de suministro hasta la entrega en destino final.',
    'products.ctaTitle': '¿Interesado en Nuestros Productos?',
    'products.ctaDescription': 'Contáctenos hoy mismo para recibir una cotización personalizada y descubrir cómo nuestras frutas colombianas de calidad superior pueden enriquecer su negocio.',
    'products.ctaButton': 'Solicitar Cotización',
    'products.guarantee': 'Respuesta garantizada en 24 horas',
    'products.whatsappMessage': 'Hola, estoy interesado en conocer más sobre sus productos de frutas colombianas para importación.',

    // Page Titles
    'page.home.title': 'American Farmers - Frutas Colombianas de Calidad Superior para el Mundo',
    'page.about.title': 'Sobre Nosotros - American Farmers',
    'page.products.title': 'Productos - American Farmers'
  },
  
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.badge': 'Certified Exporters from Colombia',
    'hero.title': 'Premium Colombian Fruits for the World',
    'hero.subtitle': 'Your trusted partner in the commercialization and export of high-quality fresh fruits',
    'hero.cta': 'Discover Our Products',
    'hero.whatsapp': 'Request Quote',
    'hero.guarantee': 'Fast response guaranteed',
    
    // Home - Introduction
    'home.intro.title': 'Quality and Commitment from Colombia to You',
    'home.intro.description': 'American Farmers is dedicated to bringing the best fresh fruits from Colombian fields to the international market. We are committed to excellence, providing superior quality products while promoting sustainable social and environmental practices.',
    
    // Home - Stats
    'home.stats.quality.title': 'Certified Quality',
    'home.stats.quality.description': 'Products that meet the highest international standards',
    'home.stats.export.title': 'Global Export',
    'home.stats.export.description': 'We bring Colombian freshness to international markets',
    'home.stats.commitment.title': 'Social Commitment',
    'home.stats.commitment.description': 'We promote sustainable practices and social development',
    
    // Home - Products
    'home.products.title': 'Our Premium Selection',
    'home.products.description': 'Discover the exceptional quality of our Colombian fruits, carefully selected and prepared for the international market.',
    'home.products.viewAll': 'View All Products',
    
    // Products
    'products.banana.name': 'Cavendish Banana',
    'products.banana.description': 'Grown in Colombia\'s ideal climate, our Premium Bananas offer a uniquely sweet and smooth flavor with a creamy, fiber-free texture. Harvested for fresh and firm presentation, they are a true taste of quality.',
    'products.banana.characteristics': 'Sweet and smooth flavor,Creamy texture,Fiber-free,Fresh and firm presentation',
    
    'products.pineapple.name': 'Pineapple',
    'products.pineapple.description': 'Experience the exceptional sweetness of our Pineapple. This fruit is incredibly juicy with a tender, bright texture and fresh, fruity aroma.',
    'products.pineapple.characteristics': 'Tender and bright texture,Fresh and fruity aroma',
    
    'products.plantain.name': 'Hartón Plantain',
    'products.plantain.description': 'A versatile staple, our Hartón Plantains are known for their firm texture and subtly sweet flavor. Perfect for a variety of culinary uses, harvested fresh and free from imperfections.',
    'products.plantain.characteristics': 'Firm texture,Subtly sweet flavor,Versatile for cooking,Free from imperfections',
    
    'products.lime.name': 'Tahiti Lime',
    'products.lime.description': 'Our Tahiti Limes offer a characteristic acidic and citric flavor perfect for beverages, cooking and more. With vibrant green color and classic oval shape, they are a quality benchmark in citrus.',
    'products.lime.characteristics': 'Characteristic acidic flavor,Vibrant green color,Classic oval shape,Perfect for beverages and cooking',
    
    'products.fruitpulp.name': 'Fruit Pulps',
    'products.fruitpulp.description': 'Discover the authentic traditional flavors of our natural fruit pulps. We carefully process fruits to separate peel and seeds, obtaining the pure edible part that we package in small portions. With specialized thermal treatment that preserves all nutritional properties without added chemicals.',
    'products.fruitpulp.characteristics': 'No added sugar,Dairy and preservative free,Free of artificial colorants,One year shelf life when frozen',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Connecting the world with the richness of Colombian agriculture',
    'about.history.title': 'Our History',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'To be a leader in the commercialization and export of fresh fruits, achieving a solid position in the international market through the provision of quality products and promoting good social and environmental practices.',
    'about.vision.title': 'Our Vision for the Future',
    'about.vision.text': 'By 2028, we project to be the leading company in the foreign market, defined by excellence, quality and transparency. We are committed to our purpose, generating employment and social development to achieve recognition and success.',
    'about.values.title': 'Our Values',
    'about.values.description': 'The principles that guide every decision and action at American Farmers',
    
    // Values
    'values.excellence.title': 'Excellence',
    'values.excellence.description': 'We commit to the highest quality standards in every product we export.',
    'values.sustainability.title': 'Sustainability',
    'values.sustainability.description': 'We promote responsible environmental practices and sustainable development of our communities.',
    'values.innovation.title': 'Innovation',
    'values.innovation.description': 'We constantly seek new ways to improve our processes and services.',
    'values.trust.title': 'Trust',
    'values.trust.description': 'We build lasting relationships based on transparency and reliability.',
    'values.responsibility.title': 'Social Responsibility',
    'values.responsibility.description': 'We contribute to the development and welfare of the communities where we operate.',
    'values.collaboration.title': 'Collaboration',
    'values.collaboration.description': 'We work as a team with producers and clients to achieve common goals.',
    
    // Footer
    'footer.description': 'Your trusted partner in the commercialization and export of high-quality fresh fruits from Colombia to the world.',
    'footer.certifiedQuality': 'Certified Quality',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.email': 'Email',
    'footer.whatsapp': 'WhatsApp',
    'footer.address': 'CR 107 #97-32 AP 202 PISO 2 Apartado, Colombia',
    'footer.links': 'Links',
    'footer.social': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    'footer.madeInColombia': 'Made in Colombia',
    'footer.developed': 'Developed with ❤️ for American Farmers',
    
    // Common
    'common.origin': 'Origin: Colombia',
    'common.whatsapp.cta': 'Get Quote via WhatsApp',
    'common.whatsapp.message': 'I am interested in Colombian fruit.',
    'common.contact.cta': 'Contact Us Now',
    'common.readyToWork': 'Ready to work with us?',
    'common.discoverPartner': 'Discover how American Farmers can be your ideal partner in importing premium Colombian fruits.',
    
    // Products Page
    'products.title': 'Our Products',
    'products.subtitle': 'Premium Colombian fruits carefully selected for international markets',
    'products.stats.varieties': 'Premium Varieties',
    'products.stats.colombian': 'Colombian Origin',
    'products.stats.support': 'Customer Support',
    'products.qualityTitle': 'Quality that Speaks for Itself',
    'products.qualityDescription': 'Each fruit in our portfolio represents the excellence of Colombian agriculture. We work with the best producers in the country to guarantee products that meet the highest international standards of quality, freshness and flavor.',
    'products.badges.certification.title': 'International Certification',
    'products.badges.certification.description': 'We comply with global quality standards',
    'products.badges.traceability.title': 'Complete Traceability',
    'products.badges.traceability.description': 'Tracking from field to destination',
    'products.badges.freshness.title': 'Guaranteed Freshness',
    'products.badges.freshness.description': 'Optimized cold chain for maximum quality',
    'products.badges.fairTrade.title': 'Fair Trade',
    'products.badges.fairTrade.description': 'We support local producers responsibly',
    'products.portfolioTitle': 'Complete Portfolio',
    'products.portfolioDescription': 'Explore our complete selection of premium Colombian fruits, each one carefully cultivated and prepared for international markets.',
    'products.processTitle': 'Our Quality Process',
    'products.processDescription': 'From field selection to final delivery, every step is designed to guarantee maximum quality.',
    'products.process.step1.title': '1. Field Selection',
    'products.process.step1.description': 'We work directly with certified producers to select the best fruits.',
    'products.process.step2.title': '2. Quality Control',
    'products.process.step2.description': 'Rigorous inspection and classification according to international export standards.',
    'products.process.step3.title': '3. Packaging and Storage',
    'products.process.step3.description': 'Specialized packaging and storage under optimal temperature and humidity conditions.',
    'products.process.step4.title': '4. International Logistics',
    'products.process.step4.description': 'Complete supply chain management until delivery at final destination.',
    'products.ctaTitle': 'Interested in Our Products?',
    'products.ctaDescription': 'Contact us today to receive a personalized quote and discover how our premium Colombian fruits can enrich your business.',
    'products.ctaButton': 'Request Quote',
    'products.guarantee': 'Guaranteed response within 24 hours',
    'products.whatsappMessage': 'Hello, I am interested in learning more about your Colombian fruit products for import.',

    // Page Titles
    'page.home.title': 'American Farmers - Premium Colombian Fruits for the World',
    'page.about.title': 'About Us - American Farmers',
    'page.products.title': 'Products - American Farmers'
  }
};

// Contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Función para detectar el idioma del navegador
const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'es'; // SSR fallback
  
  const browserLang = navigator.language || navigator.languages?.[0] || 'es';
  
  // Si el navegador está en inglés, usar inglés; de lo contrario, español
  if (browserLang.toLowerCase().startsWith('en')) {
    return 'en';
  }
  return 'es';
};

// Función para obtener el idioma guardado o detectar automáticamente
const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'es'; // SSR fallback
  
  try {
    const savedLanguage = localStorage.getItem('american-farmers-language');
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      return savedLanguage as Language;
    }
  } catch (error) {
    console.warn('Error accessing localStorage:', error);
  }
  
  // Si no hay idioma guardado, detectar automáticamente
  return detectBrowserLanguage();
};

// Provider
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const [showToast, setShowToast] = useState(false);

  // Función para cambiar idioma y persistirlo
  const setLanguage = (lang: Language) => {
    const previousLanguage = language;
    setLanguageState(lang);
    
    // Solo mostrar toast si el idioma realmente cambió
    if (previousLanguage !== lang) {
      setShowToast(true);
      
      // Ocultar toast después de 2 segundos
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
    
    try {
      localStorage.setItem('american-farmers-language', lang);
    } catch (error) {
      console.warn('Error saving language to localStorage:', error);
    }
  };

  // Efecto para cargar el idioma al montar el componente
  useEffect(() => {
    const initialLang = getInitialLanguage();
    if (initialLang !== language) {
      setLanguageState(initialLang);
    }
  }, []);

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, showToast, setShowToast }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 