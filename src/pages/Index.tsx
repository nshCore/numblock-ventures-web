
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Thesis from '@/components/Thesis';
import Stats from '@/components/Stats';
import Portfolio from '@/components/Portfolio';
import Newsletter from '@/components/Newsletter';
import FAQ from '@/components/FAQ';
import BecomeLp from '@/components/BecomeLp';
import Footer from '@/components/Footer';
import ApplyButton from '@/components/ApplyButton';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.opacity-0').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.opacity-0').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="relative">
      <AnimatedBackground />
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Thesis />
      <Stats />
      <Portfolio />
      <Newsletter />
      <FAQ />
      <BecomeLp />
      <Footer />
      <ApplyButton />
    </div>
  );
};

export default Index;
