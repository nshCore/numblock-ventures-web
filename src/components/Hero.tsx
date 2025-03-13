
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = 1 - (scrollPosition / 700);
      
      if (opacity > 0) {
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10"
      />
      
      <div 
        className="relative z-20 text-center px-6 max-w-4xl mx-auto"
        ref={heroRef}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          Empowering <br />
          <span className="text-gradient">Next-Gen</span> Founders
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
          Strategic investments and mentorship for visionary entrepreneurs in technology, Web3, and AI.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <a 
            href="#services" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 font-medium transition-all hover:shadow-glow"
          >
            Explore Services
          </a>
          <a 
            href="#thesis" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-3 font-medium transition-colors"
          >
            Our Thesis
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce opacity-80">
        <a href="#services" aria-label="Scroll down">
          <ArrowDown size={28} />
        </a>
      </div>
      
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[length:50px_50px] opacity-5 animate-grid-flow"></div>
    </section>
  );
};

export default Hero;
