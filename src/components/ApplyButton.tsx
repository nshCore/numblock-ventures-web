
import React, { useState } from 'react';
import { Send, X } from 'lucide-react';
import { toast } from 'sonner';

const ApplyButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.company || !formData.description) {
      toast.error('Please fill out all fields.');
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Your application has been submitted!');
      setFormData({ name: '', email: '', company: '', description: '' });
      setIsOpen(false);
      setLoading(false);
    }, 1500);
  };
  
  return (
    <>
      <button 
        className="fixed bottom-8 right-8 z-40 bg-primary text-white rounded-full p-4 shadow-glow animate-pulse-slow hover:animate-none hover:bg-primary/90 transition-colors"
        onClick={() => setIsOpen(true)}
        aria-label="Apply for funding"
      >
        <Send size={24} />
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <div 
            className="bg-card rounded-2xl w-full max-w-lg relative z-10 animate-fade-in shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-foreground/80 hover:text-foreground bg-background/50 rounded-full p-2"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Submit Your Pitch</h3>
              <p className="text-muted-foreground mb-6">
                Tell us about your startup and we'll get back to you soon.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Company Name
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
                      Brief Description
                    </label>
                    <textarea
                      name="description"
                      rows={4}
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      value={formData.description}
                      onChange={handleChange}
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
                        <span>Submit Application</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyButton;
