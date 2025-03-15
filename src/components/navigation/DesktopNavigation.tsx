
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

interface DesktopNavigationProps {
  openContact: () => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ openContact }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Thesis', href: '#thesis' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleAuthAction = () => {
    if (user) {
      if (location.pathname === '/dashboard') {
        signOut();
      } else {
        navigate('/dashboard');
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="hidden md:flex items-center space-x-8">
      {location.pathname === '/' && navLinks.map((link) => (
        <a 
          key={link.name}
          href={link.href}
          className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline py-1"
        >
          {link.name}
        </a>
      ))}
      
      {/* Contact Button - only show on home page */}
      {location.pathname === '/' && (
        <button 
          onClick={openContact}
          className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline py-1"
        >
          Contact
        </button>
      )}
      
      {/* Login/Dashboard Button */}
      <Button
        variant="outline"
        size="sm"
        className="ml-4"
        onClick={handleAuthAction}
      >
        {user ? (
          location.pathname === '/dashboard' ? (
            <>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </>
          ) : (
            <>
              <User className="mr-2 h-4 w-4" />
              Dashboard
            </>
          )
        ) : (
          <>
            <User className="mr-2 h-4 w-4" />
            LP Login
          </>
        )}
      </Button>
    </div>
  );
};

export default DesktopNavigation;
