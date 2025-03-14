
import React, { useEffect, useState, useRef } from 'react';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const stats = [
    { value: '$50M', label: 'Total Amount Raised', suffix: '+' },
    { value: '45', label: 'Portfolio Companies', suffix: '+' },
    { value: '3', label: 'Successful Exits', suffix: '' },
    { value: '85', label: 'Global Partners', suffix: '+' }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const formatValue = (value: string): { number: string; suffix?: string } => {
    if (value.includes('$')) {
      return { number: value.replace('$', ''), suffix: '$' };
    }
    return { number: value };
  };
  
  return (
    <section className="py-24 bg-primary/5" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => {
            const formattedValue = formatValue(stat.value);
            
            return (
              <div 
                key={index} 
                className="text-center"
              >
                <div className="relative">
                  {formattedValue.suffix === '$' && (
                    <span 
                      className={`text-4xl font-bold text-primary absolute -left-5 top-0 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      } transition-opacity duration-1000`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      {formattedValue.suffix}
                    </span>
                  )}
                  <span 
                    className={`text-5xl md:text-6xl font-bold ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-1000`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {formattedValue.number}
                  </span>
                  <span 
                    className={`text-4xl font-bold text-primary ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-1000`}
                    style={{ transitionDelay: `${index * 200 + 100}ms` }}
                  >
                    {stat.suffix}
                  </span>
                </div>
                <p 
                  className={`text-muted-foreground mt-2 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-1000`}
                  style={{ transitionDelay: `${index * 200 + 200}ms` }}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
