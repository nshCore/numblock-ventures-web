
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems: FAQItem[] = [
    {
      question: 'What types of startups does Numblock Ventures invest in?',
      answer: 'We focus on early-stage startups in technology, SaaS, Web3, AI, and blockchain sectors. We look for innovative solutions with strong technical foundations and significant market potential.'
    },
    {
      question: 'What is your typical investment size?',
      answer: 'Our initial investments typically range from $250,000 to $2 million, with capital reserved for follow-on funding in subsequent rounds. The specific amount depends on the stage, sector, and capital needs of the startup.'
    },
    {
      question: 'Do you invest internationally or only in certain regions?',
      answer: 'We invest globally, with portfolio companies across North America, Europe, Asia, and other regions. We believe innovation happens everywhere and maintain a geographically diverse investment approach.'
    },
    {
      question: 'How does your mentorship program work?',
      answer: 'Our mentorship program pairs founders with experienced advisors from our network who provide regular guidance on strategy, product development, market expansion, and operational challenges. The program is tailored to the specific needs of each portfolio company.'
    },
    {
      question: 'What makes Numblock Ventures different from other VCs?',
      answer: 'Our differentiation lies in our hands-on approach, deep technical expertise in emerging technologies, and our extensive network of industry partners. We work closely with founders throughout their journey, providing more than just capital.'
    },
    {
      question: 'How can I pitch my startup to Numblock Ventures?',
      answer: 'You can apply through the "Submit Your Pitch" button on our website. Our team reviews all submissions and reaches out to founders whose startups align with our investment criteria and thesis.'
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 opacity-0 animate-slide-up">COMMON QUESTIONS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-slide-up animate-delay-100">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-slide-up animate-delay-200">
            Everything you need to know about working with Numblock Ventures.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="border-b border-border last:border-0 opacity-0 animate-slide-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <button
                className="py-6 w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-medium">{item.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0 ml-4 text-primary" />
                ) : (
                  <ChevronDown className="flex-shrink-0 ml-4" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
