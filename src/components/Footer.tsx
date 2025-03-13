
import React from 'react';
import { Twitter, Linkedin, Mail, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/50 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold text-gradient mb-4 inline-block">
              <span className="font-mono">{ }Numblock</span>
              <span>Ventures</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering visionary entrepreneurs in technology, SaaS, Web3, AI, and blockchain through strategic investment and mentorship.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:info@numblockventures.com" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a>
              </li>
              <li>
                <a href="#thesis" className="text-muted-foreground hover:text-foreground transition-colors">Our Thesis</a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Team</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Events</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Numblock Ventures. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
