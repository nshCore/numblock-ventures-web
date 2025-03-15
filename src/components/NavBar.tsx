
import React, { useState, useEffect } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/context/AuthContext';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOut } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Thesis', href: '#thesis' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
  ];

  // Contact form schema
  const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  });

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onContactSubmit = (data: z.infer<typeof contactFormSchema>) => {
    // In a real app, you would send this data to your backend
    console.log("Contact form submitted:", data);
    toast.success("Your message has been sent! We'll be in touch soon.");
    setContactOpen(false);
    contactForm.reset();
  };

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
    <>
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
            <span className="font-mono">{ }Nublock</span>
            <span>Ventures</span>
          </a>
          
          {/* Desktop Navigation */}
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
                onClick={() => setContactOpen(true)}
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
          
          {/* Mobile Navigation - Using Sheet component for side drawer */}
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
                        onClick={() => {
                          setContactOpen(true);
                        }}
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
        </div>
      </nav>

      {/* Contact Form Dialog */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>
              Send us a message and we'll get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <Form {...contactForm}>
            <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-4">
              <FormField
                control={contactForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={contactForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={contactForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="How can we help you?" 
                        className="min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">Send Message</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NavBar;
