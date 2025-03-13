
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email.');
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you for subscribing!');
      setEmail('');
      setLoading(false);
    }, 1500);
  };
  
  return (
    <section id="newsletter" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-slide-up">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 opacity-0 animate-slide-up animate-delay-100">
            Subscribe to our newsletter for investment insights, portfolio news, and industry trends.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto opacity-0 animate-slide-up animate-delay-200">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 bg-card border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 font-medium transition-all hover:shadow-glow flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <span className="animate-pulse">Subscribing...</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4 opacity-0 animate-slide-up animate-delay-300">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
