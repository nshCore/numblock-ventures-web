
import React from 'react';
import { Menu, LogOut, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

interface MobileNavigationProps {
  openContact: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ openContact }) => {
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
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button 
            className="text-foreground focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background/95 backdrop-blur-lg">
          <div className="flex flex-col h-full py-6">
            <div className="px-4 mb-8">
              <span className="text-xl font-bold text-gradient">
                <span className="font-mono">Nublock</span>
                <span>Ventures</span>
              </span>
            </div>
            <nav className="flex flex-col space-y-6 px-4">
              {location.pathname === '/' && navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              {location.pathname === '/' && (
                <button
                  onClick={openContact}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  Contact
                </button>
              )}
              <Button
                variant="outline"
                className="justify-start"
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
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
