import React from 'react';

interface SkeletonLoaderProps {
  type?: 'text' | 'card' | 'image' | 'button';
  className?: string;
  lines?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  type = 'text',
  className = '',
  lines = 3
}) => {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';

  const renderSkeleton = () => {
    switch (type) {
      case 'text':
        return (
          <div className={`space-y-2 ${className}`}>
            {Array.from({ length: lines }).map((_, index) => (
              <div
                key={index}
                className={`${baseClasses} h-4 ${
                  index === lines - 1 ? 'w-3/4' : 'w-full'
                }`}
              />
            ))}
          </div>
        );
      
      case 'card':
        return (
          <div className={`${baseClasses} ${className} p-6`}>
            <div className={`${baseClasses} h-6 w-3/4 mb-4`} />
            <div className={`${baseClasses} h-4 w-full mb-2`} />
            <div className={`${baseClasses} h-4 w-5/6 mb-4`} />
            <div className={`${baseClasses} h-10 w-1/3`} />
          </div>
        );
      
      case 'image':
        return (
          <div className={`${baseClasses} ${className} aspect-video`} />
        );
      
      case 'button':
        return (
          <div className={`${baseClasses} h-12 w-32 ${className}`} />
        );
      
      default:
        return <div className={`${baseClasses} h-4 w-full ${className}`} />;
    }
  };

  return renderSkeleton();
};

export default SkeletonLoader; 