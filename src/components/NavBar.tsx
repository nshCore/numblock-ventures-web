
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Thesis', href: '#thesis' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#newsletter' },
  ];
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <a 
          href="#" 
          className="text-2xl font-bold text-gradient"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="font-mono">{ }Numblock</span>
          <span>Ventures</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-foreground focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href}
            className="text-xl font-medium text-foreground hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
