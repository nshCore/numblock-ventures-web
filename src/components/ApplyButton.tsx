
import React, { useState, useRef } from 'react';
import { Send, X, Upload } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const ApplyButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    phone: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFileName(selectedFile.name);
      setFile(selectedFile);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.company || !formData.description) {
      toast.error('Please fill out all required fields.');
      return;
    }
    
    setLoading(true);
    
    try {
      // First create the application record
      const { data: applicationData, error: applicationError } = await supabase
        .from('lp_applications')
        .insert({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          website: formData.website || null,
          phone: formData.phone || null,
          description: formData.description,
          file_name: fileName || null
        })
        .select('id')
        .single();
      
      if (applicationError) throw applicationError;
      
      // If there's a file, upload it to storage
      if (file && applicationData) {
        const fileExt = fileName.split('.').pop();
        const filePath = `${applicationData.id}/${Date.now()}.${fileExt}`;
        
        // Create the storage bucket if it doesn't exist yet (first time setup)
        const { data: bucketData, error: bucketError } = await supabase
          .storage
          .getBucket('applications');
          
        if (bucketError && bucketError.message.includes('not found')) {
          // Create the bucket if it doesn't exist
          await supabase.storage.createBucket('applications', {
            public: false,
            fileSizeLimit: 10485760 // 10MB
          });
        }
        
        // Upload the file
        const { error: uploadError } = await supabase
          .storage
          .from('applications')
          .upload(filePath, file);
        
        if (uploadError) throw uploadError;
        
        // Update the application with the file URL
        const { error: updateError } = await supabase
          .from('lp_applications')
          .update({ file_url: filePath })
          .eq('id', applicationData.id);
        
        if (updateError) throw updateError;
      }
      
      toast.success('Your application has been submitted!');
      setFormData({ name: '', email: '', company: '', website: '', phone: '', description: '' });
      setFileName('');
      setFile(null);
      setIsOpen(false);
    } catch (error: any) {
      console.error('Error submitting application:', error);
      toast.error('Error submitting application', {
        description: error.message || 'Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <button 
        className="fixed bottom-8 right-8 z-40 bg-primary text-white rounded-full p-6 shadow-glow animate-pulse-slow hover:animate-none hover:bg-primary/90 transition-colors flex items-center justify-center"
        onClick={() => setIsOpen(true)}
        aria-label="Apply for funding"
      >
        <Send size={28} />
        <span className="ml-2 font-medium hidden sm:inline">Apply Now</span>
      </button>
      
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
              <h3 className="text-2xl font-bold mb-2">Submit Your Pitch</h3>
              <p className="text-muted-foreground mb-6">
                Tell us about your startup and we'll get back to you soon.
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
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={formData.company}
                      onChange={handleChange}
                      required
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
                      Pitch Deck
                    </label>
                    <div 
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg flex items-center cursor-pointer hover:bg-muted/40 transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload size={18} className="mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground">{fileName || 'Upload pitch deck (PDF or PPT)'}</span>
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        className="hidden" 
                        accept=".pdf,.ppt,.pptx"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Brief Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="description"
                      rows={4}
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      value={formData.description}
                      onChange={handleChange}
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
