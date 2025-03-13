
import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { toast } from 'sonner';

const BecomeLp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    website: '',
    email: '',
    phone: '',
    amount: ''
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.amount) {
      toast.error('Please fill out all required fields.');
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Your LP application has been submitted!');
      setFormData({ name: '', company: '', website: '', email: '', phone: '', amount: '' });
      setIsOpen(false);
      setLoading(false);
    }, 1500);
  };
  
  return (
    <section id="become-lp" className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-slide-up">Become a Limited Partner</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-slide-up animate-delay-100">
            Join Numblock Ventures as a Limited Partner and gain access to our portfolio of cutting-edge startups in technology, SaaS, Web3, AI, and blockchain sectors.
          </p>
          <p className="text-muted-foreground mb-8 opacity-0 animate-slide-up animate-delay-200">
            As an LP with Numblock Ventures, you'll benefit from our team's deep expertise in identifying high-potential startups, rigorous due diligence process, and hands-on approach to helping portfolio companies scale. Our focus on emerging technologies positions our partners for significant returns as these sectors continue to transform industries globally.
          </p>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-4 font-medium transition-all hover:shadow-glow mt-4 flex items-center justify-center gap-2 mx-auto opacity-0 animate-slide-up animate-delay-300"
          >
            <span>Apply to Become an LP</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <div 
            className="bg-card rounded-2xl w-full max-w-2xl relative z-10 animate-fade-in shadow-xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-foreground/80 hover:text-foreground bg-background/50 rounded-full p-2"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Become a Limited Partner</h3>
              <p className="text-muted-foreground mb-6">
                Join us in backing the next generation of tech innovation.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Investment Amount ($) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="amount"
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="Minimum investment: $250,000"
                      min="1"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-3 font-medium transition-all hover:shadow-glow mt-2 flex items-center justify-center gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="animate-pulse">Submitting...</span>
                    ) : (
                      <>
                        <span>Submit LP Application</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BecomeLp;
