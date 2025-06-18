import React from 'react';
import AnimatedSection from './AnimatedSection';
import CounterAnimation from './CounterAnimation';

interface StatItem {
  number: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  gradient: string;
}

interface StatsCounterProps {
  stats: StatItem[];
  title?: string;
  description?: string;
  className?: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({
  stats,
  title,
  description,
  className = ''
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <AnimatedSection className="text-center mb-16">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </AnimatedSection>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="scaleIn"
              delay={0.2 + index * 0.1}
              className="text-center"
            >
              <div className={`w-20 h-20 ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-6 hover-lift`}>
                {stat.icon}
              </div>
              <CounterAnimation
                end={stat.number}
                suffix={stat.suffix}
                className="text-4xl font-bold text-gray-900 mb-2"
              />
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter; 