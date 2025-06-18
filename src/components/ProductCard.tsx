import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  characteristics: string[];
  scientificName: string;
  origin: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  description, 
  image, 
  characteristics, 
  scientificName, 
  origin 
}) => {
  const whatsappUrl = "https://wa.me/573226256101?text=I%20am%20interested%20in%20Colombian%20fruit.";

  return (
    <div className="card-product group">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {origin}
          </span>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        {/* Characteristics */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Características:</h4>
          <ul className="space-y-1">
            {characteristics.map((char, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {char}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Details */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="grid grid-cols-1 gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Origen:</span>
              <span className="font-medium text-gray-900">{origin}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Nombre Científico:</span>
              <span className="font-medium text-gray-900 italic">{scientificName}</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-whatsapp w-full justify-center"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
          </svg>
          Solicitar Cotización
        </a>
      </div>
    </div>
  );
};

export default ProductCard; 