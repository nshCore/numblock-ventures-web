
import React, { useState, useEffect } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { useLocation } from 'react-router-dom';
import Logo from './navigation/Logo';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';
import ContactForm from './navigation/ContactForm';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const openContact = () => setContactOpen(true);
  
  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Logo />
          
          {/* Desktop Navigation */}
          <DesktopNavigation openContact={openContact} />
          
          {/* Mobile Navigation */}
          <MobileNavigation openContact={openContact} />
        </div>
      </nav>

      {/* Contact Form Dialog */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <ContactForm onOpenChange={setContactOpen} />
      </Dialog>
    </>
  );
};

export default NavBar;
