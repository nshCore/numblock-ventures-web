
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onOpenChange: (open: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onOpenChange }) => {
  const contactForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onContactSubmit = (data: ContactFormValues) => {
    // In a real app, you would send this data to your backend
    console.log("Contact form submitted:", data);
    toast.success("Your message has been sent! We'll be in touch soon.");
    onOpenChange(false);
    contactForm.reset();
  };

  return (
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
  );
};

export default ContactForm;
