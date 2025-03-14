import React, { useState } from 'react';
import { Twitter, Linkedin, Mail, Github, X } from 'lucide-react';
const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    content: ''
  });
  const openModal = (title: string, content: string) => {
    setModalContent({
      title,
      content
    });
    setIsModalOpen(true);
  };
  const privacyContent = `
    <h3 class="text-lg font-semibold mb-4">Privacy Policy</h3>
    <p class="mb-3">Nublock Ventures is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or communicate with us.</p>
    <p class="mb-3">We collect personal information such as your name, email address, and company details when you voluntarily submit them through our website forms. This information is used to respond to your inquiries, provide the services you request, and improve our offerings.</p>
    <p class="mb-3">We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as required to provide services or as required by law.</p>
    <p class="mb-3">Our website may use cookies to enhance your experience and collect information about how you interact with our site. You may choose to disable cookies through your browser settings.</p>
    <p>If you have any questions regarding this privacy policy, you may contact us at privacy@nublockventures.com.</p>
  `;
  const termsContent = `
    <h3 class="text-lg font-semibold mb-4">Terms of Service</h3>
    <p class="mb-3">By accessing and using the Nublock Ventures website, you accept and agree to be bound by these Terms of Service.</p>
    <p class="mb-3">All content on this website is the property of Nublock Ventures and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express consent.</p>
    <p class="mb-3">The information provided on our website is for general informational purposes only and should not be construed as professional advice. We make no representations or warranties of any kind regarding the accuracy of our content.</p>
    <p class="mb-3">We reserve the right to modify or discontinue any aspect of our website without notice. We will not be liable for any modification, suspension, or discontinuance of the website.</p>
    <p>By using our website, you agree to indemnify and hold harmless Nublock Ventures from any claims arising from your use of the site or violation of these terms.</p>
  `;
  const cookiesContent = `
    <h3 class="text-lg font-semibold mb-4">Cookie Policy</h3>
    <p class="mb-3">Nublock Ventures uses cookies to enhance your browsing experience on our website. Cookies are small text files that are stored on your device to collect standard internet log information and visitor behavior information.</p>
    <p class="mb-3">We use essential cookies that are necessary for the website to function properly, as well as analytics cookies that help us understand how you interact with our website and allow us to improve your experience.</p>
    <p class="mb-3">You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.</p>
    <p class="mb-3">By continuing to use our website, you consent to our use of cookies as described in this policy.</p>
    <p>For more information about the cookies we use, please contact us at cookies@nublockventures.com.</p>
  `;
  return <footer className="bg-secondary/50 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold text-gradient mb-4 inline-block">
              <span className="font-mono">{}Nublock</span>
              <span>Ventures</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering visionary entrepreneurs in technology, SaaS, Web3, AI, and blockchain through strategic investment and mentorship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="mailto:info@nublockventures.com" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Email">
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
                
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              </li>
              <li>
                
              </li>
              <li>
                <button onClick={() => openModal('Privacy Policy', privacyContent)} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => openModal('Terms of Service', termsContent)} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => openModal('Cookie Policy', cookiesContent)} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                  Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Nublock Ventures. All rights reserved.
          </p>
        </div>
      </div>

      {/* Modal for legal information */}
      {isModalOpen && <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          
          <div className="bg-card rounded-2xl w-full max-w-2xl relative z-10 animate-fade-in shadow-xl max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-foreground/80 hover:text-foreground bg-background/50 rounded-full p-2" onClick={() => setIsModalOpen(false)}>
              <X size={20} />
            </button>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">{modalContent.title}</h2>
              <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{
            __html: modalContent.content
          }} />
            </div>
          </div>
        </div>}
    </footer>;
};
export default Footer;